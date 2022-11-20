import { Router } from "express"
import { signInController } from "../controllers/users/userSignIn.controller"
import { signUpController, teste } from "../controllers/users/userSignUp.controller"

export const userRouter = Router()

userRouter.post("/signup",signUpController)
userRouter.post("/signin",signInController)
userRouter.get("",teste)