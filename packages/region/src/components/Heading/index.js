import React from 'react';
import { Link } from 'react-router-dom';
import HeadingWrapper, { TitleArea, LinkArea } from './HeadingStyle';

const Index = ({ heading }) => {
  return (
    <HeadingWrapper>
      <TitleArea>
        <h1>{heading.title}</h1>
      </TitleArea>

      {heading.link && (
        <LinkArea>
          <Link to={heading.link}>Lihat Semua</Link>
        </LinkArea>
      )}
    </HeadingWrapper>
  );
};

export default Index;
