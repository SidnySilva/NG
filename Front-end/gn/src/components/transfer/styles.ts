import styled, { keyframes } from "styled-components";

const animate = keyframes`
from{
    transform: translateX(-100px);
    opacity:0;
}
to{
    opacity:1;
    }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 80vh;
  flex-direction: column;
  border: 4px solid #00a9a5;
  background-color: #092327;
  color: #90c2e7;
  animation: ${animate} 0.5s;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* max-height: 100vh; */
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
