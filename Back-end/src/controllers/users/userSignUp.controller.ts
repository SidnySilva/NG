import { Request,Response } from "express";
import { prisma } from "../../app";
import { ErrorHandler,handleError} from "../../helpers/error.helper";
import { signUpService } from "../../services/users/userSignUp.service";

export const signUpController = async (req: Request, res:Response) =>{
    try {

        const user = await signUpService(req.body)

        return res.status(200).json({message:user})
    } catch (err) {
        if(err instanceof ErrorHandler){
            return handleError(err,res)
        }
    }
}

export const teste = async (req: Request, res:Response) =>{
    const users = await prisma.user.findMany()

    return res.status(200).json({users})
}
