import styled from 'styled-components';

export const LoginButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#393e46' : '#4ecca3')};
`;

export const TEST = styled.button` //Somente para modelo
  display: flex;
  position: fixed;
  height: 90px;
  background-color: transparent;
  z-index: 2;
`;
