import React from 'react';

import Layout from '../components/Layout';
import HomeMain  from '../components/HomeMain';
import GlobalStyles from '../styles/GlobalStyles';

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <HomeMain />
      </Layout>
      <GlobalStyles />
    </>
  );
};

export default Home;