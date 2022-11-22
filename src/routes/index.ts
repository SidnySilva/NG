import { userRouter } from "./users.routes"; 
import { transactionRouter } from "./transaction.routes";
import { Express } from "express";

const router = (app: Express) => {
  app.use("/user", userRouter);
  app.use("/transaction", transactionRouter);
};

export default router;