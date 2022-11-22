
import jwt from "jsonwebtoken";
import { prisma } from "../../app";
import { ErrorHandler } from "../../helpers/error.helper";
import { Iuser } from "../../interfaces";
import bcrypt from "bcrypt"
import { Response } from "express";

export const signInService = async (res:Response, {username,password}:Iuser) =>{

    const user = await prisma.user.findUnique({where:{username:username}})

    if(!user){
        return res.status(401).json({message:"Wrong user or password!"})
    }

    if(!bcrypt.compareSync(password, user.password)){
        return res.status(401).json({message:"Wrong user or password!"})
    }

    const token = jwt.sign({user:username},String(process.env.SECRET),{expiresIn:"1d"})

    return token
}