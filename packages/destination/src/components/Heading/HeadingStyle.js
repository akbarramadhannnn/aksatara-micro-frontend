import styled from '@emotion/styled';

const HeadingWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleArea = styled.div`
  h1 {
    font-size: 24px;
    font-family: 'Avenir Next', 'Lato', sans-serif;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 1px;
    color: var(--N700, rgba(49, 53, 59, 0.96));

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

export const LinkArea = styled.div`
  a {
    font-family: 'Avenir Next', 'Lato', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 15px;
    color: #007fff;

    &:hover {
      text-decoration: underline;
      opacity: .8;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export default HeadingWrapper;
