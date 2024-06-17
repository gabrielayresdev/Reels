import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { Post as PostType } from "../../screens/Feed";
import VideoPlayer from "../VideoPlayer";
import {
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
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MY_IP } from "@env";
import FeedService from "../../services/FeedService";
import { useAuth } from "../../contexts/AuthContext";

type Props = {
  post: PostType;
  isPlaying: boolean;
};

const Post = ({ post, isPlaying }: Props) => {
  const dimensions = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const likeRef = React.useRef<LottieView | null>(null);
  const auth = useAuth();
  const [liked, setLiked] = React.useState(() => {
    return auth.user?.likes?.some((current) => current.id === post.id);
  });

  const width = dimensions.width;
  const height = dimensions.height - insets.top - 50;

  React.useEffect(() => {
    if (liked) {
      likeRef?.current?.play(144, 144);
    } else {
      likeRef?.current?.play(0, 30);
    }
  });

  const handleLike = async () => {
    if (liked) {
      likeRef?.current?.reset();
    } else {
      likeRef?.current?.play(30, 144);
    }
    setLiked(!liked);
    // Token must exist; otherwise, user shouldn't be in this page
    await FeedService.handleLike(post.id, auth.token!);
  };
  return (
    <Container width={width} height={height}>
      <DataContainer>
        <LeftSideContainer>
          <UserData>
            <Name>{post.author.name}</Name>
            <FollowButton>
              <FollowButtonText>Seguir</FollowButtonText>
            </FollowButton>
          </UserData>
          <Title>{post.title}</Title>
          <SpotifySoundTrack
            title={post.soundtrackName}
            url={post.soundtrackUrl}
          />
        </LeftSideContainer>
        <RightSideContainer>
          <TouchableOpacity onPress={handleLike}>
            <HeartContainer>
              <HeartIcon
                source={require("../../../assets/like_animation.json")}
                autoPlay={false}
                loop={false}
                ref={likeRef}
              />
            </HeartContainer>
          </TouchableOpacity>
        </RightSideContainer>
      </DataContainer>

      <VideoPlayer
        isPlaying={isPlaying}
        url={`http://${MY_IP}:3333/videos/${post.file.filename}`}
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
