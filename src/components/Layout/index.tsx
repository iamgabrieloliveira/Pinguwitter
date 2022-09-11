import React from 'react';

import MenuBar from '../MenuBar';
import SideBar from '../SideBar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = ({ children}) => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
          { children }
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
