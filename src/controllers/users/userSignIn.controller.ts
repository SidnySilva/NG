import { Request,Response } from "express";
import { ErrorHandler,handleError} from "../../helpers/error.helper";
import { signInService } from "../../services/users/userSignIn.service";

export const signInController = async (req: Request, res:Response) =>{
    try {
        const token = await signInService(res, req.body)

        return res.status(200).json({token})
    } catch (err) {
        if(err instanceof ErrorHandler){
            return handleError(err,res)
        }
    }
}