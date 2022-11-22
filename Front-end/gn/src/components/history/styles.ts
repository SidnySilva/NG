import styled, { keyframes } from "styled-components";

const animate = keyframes`
from{
    transform: translateY(100px);
    opacity:0;
}
to{
    opacity:1;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  flex-direction: column;
  border: 4px solid #00a9a5;
  background-color: #092327;
  color: #90c2e7;
  animation: ${animate} 0.5s;
  .user {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-top: 3rem;
  }
  .buttons {
    display: flex;
    margin: 2rem;
  }
  .cash {
    width: 100%;
    max-height: 100vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #00a9a5; 
      border-radius: 20px; 
    }
  }

  .loggout {
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #00a9a5;
    background-color: #092327;
    color: #00a9a5;
    transition: 0.3s;
    :hover {
      transform: scale(1.1);
      transition: 0.3s;
      color: #90c2e7;
      background-color: black;
    }
  }
`;
