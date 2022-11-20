import { prisma } from "../../app";
import { ErrorHandler,handleError} from "../../helpers/error.helper";
import { Itransaction } from "../../interfaces";

export const cashOutService = async ({username,quantity}:Itransaction) =>{

    const user = await prisma.user.findUnique({where:{username:username}})

    if(!user){
        throw new ErrorHandler(404,"user not found")
    }

    // if(quantity > ){
    //     throw new ErrorHandler(400,"insufficient balance")

    // }

    return "Successful transfer"
}