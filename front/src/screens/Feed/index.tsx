import React from "react";
import { FlatList, Text, View, ViewToken } from "react-native";
import Post from "../../components/Post";
import { Container } from "./styles";
import PagerView from "react-native-pager-view";
import { MY_IP } from "@env";
import FeedService from "../../services/FeedService";
import useFetch from "../../hooks/useFetch";

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

  const { data } = useFetch<Post[]>(FeedService.getPosts, limit, offset);

  /* React.useEffect(() => {
    async function getPosts() {
      try {
        console.log("Fazendo fetch");
        const response = await FeedService.getPosts();
        if (response?.status === 200) {
          const data: Post[] = response.data();
          setPosts(data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getPosts();
  }, []); */

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
        data={data}
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
