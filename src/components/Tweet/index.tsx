import React from 'react';

import {
  Container,
  Retweeted,
  TweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <TweetIcon src="logo.png" />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar src="mortyavatar.jpg"/>

        <Content>
          <Header>
            <strong>Rick</strong>
            <span>@rick</span>
            <Dot />
            <time>10 de set</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>HAHAHAHA</Description>

          <ImageContent src="rmwallpaper.jpg"/>

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
