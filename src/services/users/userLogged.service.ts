import { prisma } from "../../app";


export const userLoggedService = async (decoded) => {
  const user = await prisma.user.findUnique({
    where: { username: decoded.user },
  });
  const account = await prisma.account.findUnique({where:{id:user.accountId}})

  const newUser ={username:user.username, balance:account.balance}
  return newUser
};
