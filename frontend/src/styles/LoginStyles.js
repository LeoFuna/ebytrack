import styled from 'styled-components';

/* eslint-disable */

export const LoginButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#393e46' : '#4ecca3')};
`;

export const LoginMessage = styled.p`
  visibility: ${({ isVisibleHandler }) => isVisibleHandler ? 'visible' : 'hidden'};
`;
