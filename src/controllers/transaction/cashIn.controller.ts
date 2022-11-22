import { Request, Response } from "express";
import { prisma } from "../../app";
import { ErrorHandler, handleError } from "../../helpers/error.helper";
import { cashInService } from "../../services/transaction/cashIn.service";

export const cashInController = async (req: Request, res: Response) => {
  try {
    const param = req.params;
    const decoded = req.decoded;

    const data = await cashInService(param, decoded);

    return res.status(200).json(data);
  } catch (err) {
    if (err instanceof ErrorHandler) {
      return handleError(err, res);
    }
  }
};

export const teste = async (req: Request, res: Response) => {
  try {


    const algo = await prisma.user.findMany()
    return res.status(200).json(algo) 

  } catch (err) {
    if (err instanceof ErrorHandler) {
      return handleError(err, res);
    }
  }
};