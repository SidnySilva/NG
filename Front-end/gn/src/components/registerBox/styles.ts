import styled from "styled-components";

export const Form = styled.form`
  background-color: #092327;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 30rem;
  height: 35rem;
  border-radius: 10px;
  box-shadow: 1px 1px 15px black;
  font-family: Arial, Helvetica, sans-serif;
  color: #90c2e7;
  h1 {
    display: flex;
    justify-self: end;
    margin-top: 4rem;
    font-size: 36px;
  }
  h3{
    margin: 0;
  }

  .inputs {
    display: flex;
    flex-direction: column;
  }
  .buttons {
    display: flex;
  }
  .error {
    color: white;
  }
`;
