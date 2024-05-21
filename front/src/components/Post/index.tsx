import React from "react";
import { Dimensions, Text, View } from "react-native";
import { Post as PostType } from "../../screens/Feed";
import VideoPlayer from "../VideoPlayer";
import {
  Avatar,
  Container,
  DataContainer,
  Icon,
  LeftSideContainer,
  Name,
  RightSideContainer,
  SpotifySoundTrack,
  Title,
  UserData,
  UserDataTextContainer,
} from "./styles";

const Post = ({ post }: { post: PostType }) => {
  const { width, height } = Dimensions.get("window");
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
          <Icon />
        </RightSideContainer>
      </DataContainer>
      <VideoPlayer
        url={`http://192.168.15.39:3333/videos/${post.file.originalname}`}
      />
    </Container>
  );
};

export default Post;
