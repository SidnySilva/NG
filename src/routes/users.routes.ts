import { Router } from "express"
import { teste } from "../controllers/transaction/cashIn.controller"
import { userLoggedController } from "../controllers/users/userLogged.controller" 
import { signInController } from "../controllers/users/userSignIn.controller"
import { signUpController } from "../controllers/users/userSignUp.controller"
import validateToken from "../middlewares/auth.middleware"
import { validateSchemaMiddleware } from "../middlewares/validateShema.middleware"
import { userCreateSchema } from "../schema/user.schema"

export const userRouter = Router()

userRouter.post("/signup",validateSchemaMiddleware(userCreateSchema),signUpController)
userRouter.post("/signin",signInController)
userRouter.get("",validateToken,userLoggedController)
userRouter.get("/teste",teste)