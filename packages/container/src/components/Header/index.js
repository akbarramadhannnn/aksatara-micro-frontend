import React from 'react';
import { Link } from 'react-router-dom';
import Header, { Menu, MenuList } from './HeaderStyles';

const Index = () => {
  return (
    <Header>
      <Menu>
        <MenuList>
          <Link to="/">Home</Link>
        </MenuList>
        <MenuList>
          <Link to="/wisata">Wisata</Link>
        </MenuList>
      </Menu>
    </Header>
  );
};

export default Index;
