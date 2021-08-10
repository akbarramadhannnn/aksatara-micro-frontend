import styled from '@emotion/styled';

const CardWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  width: 100%;
  height: 100%;

  @media (min-width: 1025px) and (max-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 110px;
  }
`;

export const ContentCard = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-image: linear-gradient(
    rgb(26, 26, 26, 0),
    rgb(26, 26, 26, 0),
    rgb(26, 26, 26, 0.7) 100%
  );
`;

export const TittleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  h1 {
    color: #ffffff;
    font-family: 'Avenir Next', 'Lato', sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 18px;
    letter-spacing: 1px;

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 9px;
      line-height: 14px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 10px 15px;
  }
`;

export default CardWrapper;
