import React from 'react';

import Layout from '../components/Layout';
import ProfileMain from '../components/ProfileMain';
import GlobalStyles from '../styles/GlobalStyles';

function Profile() {
  return (
    <>
      <Layout>
        <ProfileMain />
      </Layout>
      <GlobalStyles />
    </>
  );
}

export default Profile;
