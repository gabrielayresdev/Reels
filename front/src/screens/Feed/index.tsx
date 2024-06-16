import React from "react";
import { FlatList, ViewToken } from "react-native";
import Post from "../../components/Post";
import { Container } from "./styles";
import FeedService from "../../services/FeedService";
import useFetch from "../../hooks/useFetch";
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

  const [limit, setLimit] = React.useState(10);
  const [offset, setOffset] = React.useState(0);
  const auth = useAuth();

  useFocusEffect(
    React.useCallback(() => {
      try {
        auth.updateUser();
      } catch (error) {
        console.log(error);
      }
    }, [])
  );

  React.useEffect(() => {
    (async () => {
      const response = await FeedService.getPosts(limit, offset);
      setPosts(response.data);
    })();
  }, [auth.user]);

  /* React.useEffect(() => {
    console.log("oi");
    if (data) {
      setPosts((current) => [...current, ...data]);
    }
  }, [data]);

  React.useEffect(() => {
    if (limit - currentPost < 4) {
      setLimit(limit + 10);
      setOffset(offset + 10);
      console.log(limit, offset);
    }
  }, [currentPost]); */

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
