import React, { Fragment } from 'react';
import LoadingCardWrapper, {
  ContentWrapper,
  WrapperContent,
  HeadingWrapper,
} from './LoadingCardStyles';

const Index = () => {
  const limitWisata = Array(12).fill(0);

  return (
    <Fragment>
      <HeadingWrapper>
        <div className="shine box-line"></div>
      </HeadingWrapper>
      <LoadingCardWrapper>
        {limitWisata.map((_, index) => {
          return (
            <ContentWrapper key={index}>
              <div className="shine box-image"></div>

              <WrapperContent>
                <div className="shine box-line"></div>
                <div className="shine box-line"></div>
              </WrapperContent>
            </ContentWrapper>
          );
        })}
      </LoadingCardWrapper>
    </Fragment>
  );
};

export default Index;
