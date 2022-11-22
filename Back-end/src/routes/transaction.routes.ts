import { Router } from "express"
import { cashInController } from "../controllers/transaction/cashIn.controller"
import { cashOutController } from "../controllers/transaction/cashOut.controller"
import validateToken from "../middlewares/auth.middleware"

export const transactionRouter = Router()

transactionRouter.post("/cashin",validateToken,cashInController)
transactionRouter.post("/cashout",validateToken,cashOutController)
transactionRouter.get("/:string",validateToken,cashInController)