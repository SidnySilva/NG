import internal from "stream";

export interface Iuser{
    username:string;
    password:string;
    confirmPassword:string;
}

export interface Itransaction{
    username:string;
    quantity:number;
}