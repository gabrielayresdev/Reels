import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { Post as PostType } from "../../screens/Feed";
import VideoPlayer from "../VideoPlayer";
import {
  Avatar,
  Container,
  DataContainer,
  FollowButton,
  FollowButtonText,
  Gradient,
  HeartContainer,
  HeartIcon,
  LeftSideContainer,
  Name,
  RightSideContainer,
  Title,
  UserData,
} from "./styles";
import LottieView from "lottie-react-native";
import SpotifySoundTrack from "../SpotifySoundTrack";

type Props = {
  post: PostType;
  isPlaying: boolean;
};

const Post = ({ post, isPlaying }: Props) => {
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
            <View>
              <Name>{post.author.name}</Name>
              <FollowButton>
                <FollowButtonText>Follow</FollowButtonText>
              </FollowButton>
            </View>
          </UserData>
          <Title>{post.title}</Title>
          <SpotifySoundTrack title={post.soundtrackUrl} />
        </LeftSideContainer>
        <RightSideContainer>
          <TouchableOpacity onPress={handleLike}>
            <HeartContainer>
              <HeartIcon
                source={require("../../../assets/like_animation.json")}
                loop={false}
                ref={likeRef}
              />
            </HeartContainer>
          </TouchableOpacity>
        </RightSideContainer>
      </DataContainer>

      <VideoPlayer
        isPlaying={isPlaying}
        url={`http://192.168.15.39:3333/videos/${post.file.filename}`}
      />
      <Gradient
        locations={[0, 0.26, 0.6, 1]}
        colors={[
          "rgba(0, 0, 0, 0)",
          "rgba(0, 0, 0, 0)",
          "rgba(0, 0, 0, 0)",
          "rgba(0, 0, 0, 0.7)",
        ]}
      />
    </Container>
  );
};

export default Post;
