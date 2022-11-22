import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    color?:string; 
    text:string;
}

export const ButtonBox = ({onClick, color, text}:ButtonProps) =>{

    return(
    <Container onClick={onClick}>
        <p>
        {text}
        </p>
    </Container>
    )

}