import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar src="/avatarpingu.jpg"/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Oliveira</h1>
        <h2>@oliveira.dev</h2>

        <p>
          Developer at <a href="https://www.jetimob.com/">@Jetimob</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Santa Maria, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 16 de outubro de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
