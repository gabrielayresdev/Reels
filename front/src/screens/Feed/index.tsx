import React from "react";
import { FlatList, Text, View } from "react-native";
import Post from "../../components/Post";
import { Container } from "./style";
import PagerView from "react-native-pager-view";

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
  const [currentPosts, setCurrentPosts] = React.useState(0);

  React.useEffect(() => {
    async function getPosts() {
      try {
        console.log("Fazendo fetch");
        const response = await fetch("http://192.168.15.39:3333/posts");
        /* console.log(response); */
        const data = await response.json();
        /* console.log(data); */
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    }

    getPosts();
  }, []);

  return (
    <Container>
      {posts && (
        <PagerView
          initialPage={0}
          useNext
          orientation="vertical"
          onPageSelected={(e) => setCurrentPosts(e.nativeEvent.position)}
          style={{ flex: 1 }}
        >
          {/* <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Post post={item} />}
            ListEmptyComponent={() => <Text>Algum error ocorreu</Text>}
          /> */}
          {posts.map((post, index) => (
            <Post
              post={post}
              key={index + 1}
              isPlaying={currentPosts === index}
            />
          ))}
        </PagerView>
      )}
    </Container>
  );
};

export default Feed;
