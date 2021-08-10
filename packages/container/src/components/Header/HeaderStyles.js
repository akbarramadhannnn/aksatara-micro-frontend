import styled from '@emotion/styled';

const Header = styled.header`
  position: relative;
  height: 70px;
  width: 100%;
  box-shadow: rgb(0 0 0 / 7%) 0px 4px 6px -1px;
  background: rgb(255, 255, 255);
  z-index: 999;
  padding: 10px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media screen and (max-width: 320px) {
    height: 70px;
    background: yellow;
  }

  @media screen and (max-width: 480px) {
    height: 70px;
    background: red;
  } */

  /* @media screen and (min-width: 600px) {
    background: red;
  }

  @media screen and (min-width: 768px) {
    background: red;
  }

  @media screen and (min-width: 900px) {
    background: red;
  } */

  /* @media screen and (min-width: 1024px) {
    height: 90px;
    background: blue;
  }

  @media screen and (min-width: 1200px) {
    height: 90px;
    background: green;
  } */
`;

export const Menu = styled.ul`
  display: flex;
  width: 100%;
  height: 70px;
  /* background: red; */
`;

export const MenuList = styled.li`
  /* width: 100%;
  height: 100%; */
  /* background: blue; */
  padding: 0px 5px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: rgba(49, 53, 59, 0.96);

    &:hover {
      cursor: pointer;
    }
  }
`;

export default Header;
