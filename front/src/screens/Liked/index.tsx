import React from "react";
import { FlatList, ViewToken } from "react-native";
import Post from "../../components/Post";
import { Container } from "./styles";
import FeedService from "../../services/FeedService";
import { useFocusEffect } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthContext";

export type Post = {
  id: string;
  authorId: string;
  title: string;
  soundtrackUrl: string;
  file: File;
  author: Author;
};

type File = {
  id: string;
  filename: string;
  originalname: string;
  size: number;
  mimetype: string;
  duration: number;
  postId: string;
};

type Author = {
  id: string;
  name: string;
  cpf: string;
  email: string;
  hash: string;
  salt: string;
  tel: string;
};

const Feed = () => {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [currentPost, setCurrentPost] = React.useState(0);
  const auth = useAuth();

  useFocusEffect(
    React.useCallback(() => {
      try {
        const updatePosts = async () => {
          if (auth.user?.likes) {
            const ids = auth.user.likes.map((post) => post.id);
            const posts = await FeedService.getPostsById(ids, auth.token!);
            const data: Post[] = (posts ?? []).map((current) => current.data);
            setPosts(data);
          }
        };
        updatePosts();
      } catch (error) {
        console.log(error);
      }
    }, [])
  );

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    setCurrentPost(
      viewableItems[0].index !== null ? viewableItems[0].index : -1
    );
  };

  return (
    <Container>
      <FlatList
        onViewableItemsChanged={onViewableItemsChanged}
        data={posts}
        renderItem={({ item, index }) => (
          <Post post={item} isPlaying={currentPost === index} />
        )}
        keyExtractor={(item) => item.id}
        pagingEnabled
      />
    </Container>
  );
};

export default Feed;
