import { Request,Response } from "express";
import { ErrorHandler,handleError} from "../../helpers/error.helper";
import { cashOutService } from "../../services/transaction/cashOut.service";

export const cashOutController = async (req: Request, res:Response) =>{
    try {

        const cashOut = await cashOutService(req.decoded,req.body,res);

        return res.status(200).json(cashOut)
    } catch (err) {
        if(err instanceof ErrorHandler){
            return handleError(err,res)
        }
    }
}