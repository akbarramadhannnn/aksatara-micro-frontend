import React from 'react';
import { Header, Footer } from '../components';
import Layout, { Content } from './LayoutStyles';

const Index = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default Index;
