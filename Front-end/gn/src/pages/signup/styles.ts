import styled, { keyframes } from "styled-components";

const animate = keyframes`
from{
   
    opacity:0;
}
to{
    opacity:1;
    }
`;


export const Container = styled.section`
display:flex;
justify-content: center;
align-items:center ;
width: 100vw;
height: 100vh;
animation: ${animate} 1s;
`