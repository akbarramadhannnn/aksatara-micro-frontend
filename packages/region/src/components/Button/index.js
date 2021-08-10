import React from 'react';
import ButtonWrapper, { Button } from './ButtonStyles';

const Index = ({ children }) => {
  return (
    <ButtonWrapper>
      <Button>{children}</Button>
    </ButtonWrapper>
  );
};

export default Index;
