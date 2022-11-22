import { Request, Response } from "express";
import { userLoggedService } from "../../services/users/userLogged.service";

export const userLoggedController = async (req: Request, res: Response) => {
    const teste = req.decoded

    const user = await userLoggedService(req.decoded)

  return res.status(200).json(user);
};
