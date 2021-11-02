import styled from 'styled-components';

/* eslint-disable */

export const SignupButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#393e46' : '#4ecca3')};
`;

export const SuccessSignupMessage = styled.div`
  display : block;
  position: fixed;
  top: 35vh;
  left: 25vw;
  width: 50vw;
  height: 30vh;
  border-radius: 5px;
  border: 2px solid #393e46;
  visibility: ${({ isVisible }) => isVisible ? 'visible' : 'hidden'};
  background-color: #4ecca3;
  text-align: center;
`;
