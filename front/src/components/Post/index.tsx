import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { Post as PostType } from "../../screens/Feed";
import VideoPlayer from "../VideoPlayer";
import {
  Avatar,
  Container,
  DataContainer,
  LeftSideContainer,
  Name,
  RightSideContainer,
  SpotifySoundTrack,
  Title,
  UserData,
  UserDataTextContainer,
} from "./styles";
import LottieView from "lottie-react-native";

const Post = ({ post }: { post: PostType }) => {
  const { width, height } = Dimensions.get("window");
  const likeRef = React.useRef<LottieView | null>(null);
  const [liked, setLiked] = React.useState(false);

  React.useState(() => {
    likeRef?.current?.play(0, 30);
  });

  const handleLike = () => {
    if (liked) {
      likeRef?.current?.reset();
    } else {
      likeRef?.current?.play(30, 144);
    }

    setLiked(!liked);
  };
  return (
    <Container width={width} height={height}>
      <DataContainer>
        <LeftSideContainer>
          <UserData>
            <Avatar />
            <UserDataTextContainer>
              <Name>{post.author.name}</Name>
              <Text>Follow</Text>
            </UserDataTextContainer>
          </UserData>
          <Title>{post.title}</Title>
          <SpotifySoundTrack>Sick of The Silence</SpotifySoundTrack>
        </LeftSideContainer>
        <RightSideContainer>
          <TouchableOpacity onPress={handleLike}>
            <LottieView
              ref={likeRef}
              style={{ width: 100, height: 100 }}
              source={require("../../../assets/like_animation.json")}
              loop={false}
            />
          </TouchableOpacity>
        </RightSideContainer>
      </DataContainer>
      <VideoPlayer
        url={`http://192.168.15.39:3333/videos/${post.file.originalname}`}
      />
    </Container>
  );
};

export default Post;
