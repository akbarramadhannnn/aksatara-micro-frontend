import styled from '@emotion/styled';

const Footer = styled.footer`
  position: relative;
  width: 100%;
  height: 70px;
  background: rgb(255, 255, 255);
  box-sizing: border-box;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;

  p {
    font-size: 15px;
    a {
      text-decoration: underline;

      &:hover {
        color: #007fff;
        cursor: pointer;
      }
      &.active {
        font-weight: 700;
        color: #007fff;
      }
    }
  }
`;

export default Footer;
