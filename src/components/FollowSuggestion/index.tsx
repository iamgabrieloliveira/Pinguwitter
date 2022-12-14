import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
  avatar: string,
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname, avatar }) => {
  return (
    <Container>
      <div>
        <Avatar src={avatar}/>

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
