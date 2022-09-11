import React from 'react';
import { Link } from 'react-router-dom';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const ProfileMain: React.FC = () => {
  return (
    <Container>
      <Header>
        <Link to="/home">
          <BackIcon />
        </Link>

        <ProfileInfo>
          <strong>Oliveira</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default ProfileMain;
