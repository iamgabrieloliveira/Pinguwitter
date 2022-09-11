import React from 'react';
import { Link } from 'react-router-dom';

import Tweet from '../Tweet';

import {
  Container,
  Header,
  Title,
  Icon,
  WriteTweet,
  Avatar,
  Content,
  WritterTweet,
  IconsWrapper,
  BottomIcon,
  Button,
  TweetsWrapper,
} from './style';

const Index: React.FC = () => {
  return (
     <Container>
       <Header>
         <Title>
           Home
         </Title>
         <Icon />
       </Header>
       <WriteTweet>
         <Link to="/profile">
           <Avatar src="avatarpingu.jpg" />
         </Link>
         <Content>
           <WritterTweet placeholder="Whats happening"/>
           
           <IconsWrapper>
             <BottomIcon src="imageicons.png"/>
             <BottomIcon src="gificons.png"/>
             <BottomIcon src="statsicons.png"/>
             <BottomIcon src="smileicons-1.png"/>
             <BottomIcon src="scheduleicons.png"/>
           </IconsWrapper>
           <Button>
             <span>Tweetar</span>
           </Button>
         </Content>
       </WriteTweet>
       <TweetsWrapper>
         <Tweet />
         <Tweet />
         <Tweet />
         <Tweet />
         
       </TweetsWrapper>
     </Container>
  );
};

export default Index;