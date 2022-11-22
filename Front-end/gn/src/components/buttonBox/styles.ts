import styled from "styled-components"

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-content: center;
    border: none;
    border-radius: 5px;
    height: 2rem;
    width: 8rem;
    margin: 10px;
    background-color: #092327;
    border: 3px solid #00a9a5;
    p{
        color: #00a9a5;
       align-self: center;
    }
    transition: 0.3s;
    :hover{
        background-color: black;
        transform: scale(1.1);
    }
`

