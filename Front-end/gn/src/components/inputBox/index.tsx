import { InputHTMLAttributes } from "react"
import { Container } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder:string;
    register:any;
    type?:string;
}

export const InputBox = ({type, placeholder, register}:InputProps) =>{
    return <Container type={type} placeholder={placeholder} {...register}>

    </Container>
}