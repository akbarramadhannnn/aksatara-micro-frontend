import styled from '@emotion/styled';

const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0px 10px 0px;
`;

export const Button = styled.button`
  outline: none;
  padding: 12px 50px;
  border: 1px solid #007fff;
  border-radius: 4px;
  background: #fff;
  color: #007fff;

  &:hover {
    cursor: pointer;
    background: #007fff;
    color: #fff;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 9px 28px;
  }
`;

export default ButtonWrapper;
