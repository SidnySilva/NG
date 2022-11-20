import { PrismaClient } from "@prisma/client";
import express, {json, NextFunction, Request, Response} from "express"
import cors from "cors"
import router from "./routes";
import { ErrorHandler, handleError } from "./helpers/error.helper";

export const prisma = new PrismaClient()

export const app = express()

app.use(cors())
app.use(json())

router(app)
app.use((err:any, req:Request,res:Response, next:NextFunction) =>{
    if(err instanceof ErrorHandler){
        return handleError(err,res)
    }

    return res.status(500).send({message:"Internal server error"})
})
