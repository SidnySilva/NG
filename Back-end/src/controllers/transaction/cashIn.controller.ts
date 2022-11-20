import { Request,Response } from "express";
import { ErrorHandler,handleError} from "../../helpers/error.helper";
import { cashInService } from "../../services/transaction/cashIn.service";

export const cashInController = async (req: Request, res:Response) =>{
    try {

        

        return res.status(200).json({message:'user'})
    } catch (err) {
        if(err instanceof ErrorHandler){
            return handleError(err,res)
        }
    }
}