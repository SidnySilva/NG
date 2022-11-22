import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  border: 4px solid #00a9a5;
  background-color: #90c2e7;
  color: #90c2e7;
  height: 100%;
  
  .buttons {
    display: flex;
    margin: 2rem;
  }
  .cash {
    width: 70%;
  }

  
  .profile {
    svg {
      width: 3rem;
      height: 3rem;
      border: 2px solid #00a9a5;
      border-radius: 50%;
      margin-right: 1rem;
    }
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .history {
    display: flex;
    flex-direction:column;
    align-items: center;
    max-height: 50vh;
    width: 85%;
  }
`;

export const Header = styled.header`
display: flex;
justify-content: space-around;
align-content: center;
width: 100%;
background-color: #092327;
align-self: flex-start;

.loggout {
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
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
`