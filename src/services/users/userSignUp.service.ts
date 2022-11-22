import {prisma} from "../../app"
import { Iuser } from "../../interfaces"
import bcrypt from "bcrypt"
import { ErrorHandler } from "../../helpers/error.helper"

export const signUpService = async ({username,password,confirmPassword}:Iuser) =>{

    const user = await prisma.user.findUnique({where:{username:username}})

    if(user){
        console.log('to aqui')
        throw new ErrorHandler(401,"User already exists!")
    }
    
    if(password !== confirmPassword){
        throw new ErrorHandler(401,"Different password!")
    }

    const newAccount = await prisma.account.create({data:{balance:100}})

    const hashPassword = bcrypt.hashSync(password,10)

    await prisma.user.create({
        data:{
            username:username,
            password:hashPassword,
            accountId:<any>newAccount.id
        },
    })

    return "User created with success"
}