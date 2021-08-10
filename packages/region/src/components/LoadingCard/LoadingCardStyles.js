import styled from '@emotion/styled';

const LoadingCardWrapper = styled.div`
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

export const ContentWrapper = styled.div`
  background: #ffff;
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 110px;
  }

  .shine {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-repeat: no-repeat;
    background-size: 100% auto;
    display: inline-block;
    position: relative;

    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;
  }

  .box-image {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  .box-line {
    width: 150px;
    height: 20px;
    margin-bottom: 10px;
    border-radius: 6px;

    &:last-child {
      margin-bottom: 0px;
    }

    @media only screen and (min-width: 992px) and (max-width: 1024px) {
      width: 47.2%;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 46.2%;
    }

    @media only screen and (max-width: 767px) {
      height: 10px;
      width: 70%;
    }
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 850px 0;
    }
  }
`;

export const HeadingWrapper = styled.div`
  background: transparent;
  margin-bottom: 20px;

  .shine {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-repeat: no-repeat;
    background-size: 100% auto;
    display: inline-block;
    position: relative;

    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;
  }

  .box-line {
    width: 150px;
    height: 30px;
    border-radius: 6px;
    box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;

    &:last-child {
      margin-bottom: 0px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      height: 20px;
    }
  }
`;

export default LoadingCardWrapper;
