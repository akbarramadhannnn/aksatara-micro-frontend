import React, { Fragment } from 'react';
import LoadingCardWrapper, {
  ContentWrapper,
  HeadingWrapper,
} from './LoadingCardStyles';

const Index = () => {
  const limitProvince = Array(10).fill(0);

  return (
    <Fragment>
      <HeadingWrapper>
        <div className="shine box-line"></div>
      </HeadingWrapper>
      <LoadingCardWrapper>
        {limitProvince.map((_, index) => {
          return (
            <ContentWrapper key={index}>
              <div className="shine box-image"></div>
            </ContentWrapper>
          );
        })}
      </LoadingCardWrapper>
    </Fragment>
  );
};

export default Index;
