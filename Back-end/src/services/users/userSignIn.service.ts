
import jwt from "jsonwebtoken";
import { prisma } from "../../app";
import { ErrorHandler } from "../../helpers/error.helper";
import { Iuser } from "../../interfaces";
import bcrypt from "bcrypt"

export const signInService = async ({username,password}:Iuser) =>{

    const user = await prisma.user.findUnique({where:{username:username}})

    if(!user){
        throw new ErrorHandler(401,"Wrong user or password!")
    }

    if(!bcrypt.compareSync(password, user.password)){
        throw new ErrorHandler(401,"Wrong user or password!")
    }

    const token = jwt.sign({user:username},String(process.env.SECRET),{expiresIn:"1d"})

    return token
}