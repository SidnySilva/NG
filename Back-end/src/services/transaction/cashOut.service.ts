import { Response } from "express";
import { prisma } from "../../app";
import { ErrorHandler,handleError} from "../../helpers/error.helper";
import { Itransaction } from "../../interfaces";

export const cashOutService = async (decoded,{username,quantity}:Itransaction, res:Response) =>{

    const toUser = await prisma.user.findUnique({where:{username:username}})
    const toAccount = await prisma.account.findUnique({where:{id:toUser.accountId}})

    const fromUser = await prisma.user.findUnique({where:{username:decoded.user}})
    const fromAccount = await prisma.account.findUnique({where:{id:fromUser.accountId}})
 

    if(!toUser){
       return res.status(404).json({message:"User not found!"})
    }
    
    else if(toUser.id === fromUser.id){
       return res.status(401).json({message:"You can't send your balance to your self!"})
    }

    if(quantity > fromAccount.balance){
       return res.status(401).json({message:"insufficient balance!"})
    }

    await prisma.account.update({where:{
        id:fromUser.accountId
    },
    data:{
        balance:fromAccount.balance-quantity
    }})

    await prisma.account.update({where:{
        id:toUser.accountId
    },
        data:{
        balance:toAccount.balance+quantity
    }})

    await prisma.transactions.create({data:{credited_id:toAccount.id,debited_id:fromAccount.id,value:quantity}})
    
    return "Successful transfer"
}