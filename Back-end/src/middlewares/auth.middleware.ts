import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify, VerifyErrors } from "jsonwebtoken";
import { ErrorHandler } from "../helpers/error.helper"; 

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.headers.authorization;
  console.log('oi')

  if (!token) {
    res.status(400).json({ message: "Missing authorization token." });
  }
  console.log('oi')

  return verify(
    token,
    process.env.SECRET,
    (err: VerifyErrors, decoded: string | JwtPayload) => {
      console.log('oi')

      if (err) {
      console.log('oi')

        throw new ErrorHandler(401, err.message);
      }
      console.log('oi')
      req.decoded = decoded as Partial<User>;

      return next();
    }
  );
};

export default validateToken;