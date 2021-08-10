import styled from '@emotion/styled';

const CardWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  width: 100%;
  height: 100%;

  /* .smooth-card {
    transition: opacity 1s;
  }
  .card-visible {
    opacity: 1;
  }
  .card-hidden {
    opacity: 0;
  }
  background: green; */

  /* @media (min-width: 1281px) {
    background: green;
  } */

  @media (min-width: 1025px) and (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  animation: scale-display 0.3s;
  background: #ffff;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
  /* box-shadow: 0 1.5em 2em -1em #999; */

  a {
    &:hover {
      cursor: pointer;
    }
  }

  @keyframes scale-display {
    0% {
      opacity: 0;
      transform: scale(0);
      -webkit-transform: scale(0);
    }

    50% {
      opacity: .5;
    }

    100% {
      opacity: 1;
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
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
    height: 150px;
    border-radius: 8px;

    @media (min-width: 320px) and (max-width: 480px) {
      height: 100px;
    }
  }

  .smooth-image {
    transition: opacity 1s;
  }
  .image-visible {
    opacity: 1;
  }
  .image-hidden {
    opacity: 0;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100px;
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

export const InfoWrapper = styled.div`
  height: auto;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 15px;

  /* @media (min-width: 1024px) and (max-width: 1280px) {
    height: 340px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 200px;
  } */
`;

export const TitleWrapper = styled.div`
  display: inline-block;
  h1 {
    /* font-family: 'Nunito Sans', 'Open Sans', sans-serif; */
    font-family: 'Avenir Next', 'Lato', sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 18px;
    letter-spacing: 1px;
    color: var(--N700, rgba(49, 53, 59, 0.96));

    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

export const KeteranganWrapper = styled.div`
  margin-top: 5px;
  p {
    /* margin: 0; */
    font-family: 'Avenir Next', 'Lato', sans-serif;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 1px;
    /* color: var(--N700, rgba(49, 53, 59, 0.75)); */
    color: #acacac;

    @media (min-width: 481px) and (max-width: 767px) {
      line-height: 12px;
      font-size: 10px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      line-height: 12px;
      font-size: 10px;
    }
  }
`;

export default CardWrapper;
