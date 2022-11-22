import { Prisma, User } from "@prisma/client";

declare global {
    namespace Express {
      interface Request {
        decoded: Partial<User>;
        user: User;
        validated: Prisma.UserUncheckedCreateInput
      }
    }
  }