import { Console } from "console";
import { prisma } from "../../app";
import { ErrorHandler, handleError } from "../../helpers/error.helper";

export const cashInService = async (param, decoded) => {
  const user = await prisma.user.findUnique({
    where: { username: decoded.user },
  });

  if (param.string === "cashin") {
    const data = await prisma.transactions.findMany({
      where: { credited_id: user.accountId },
    });
    return  func(data);
  } else if (param.string === "cashout") {
    const data = await prisma.transactions.findMany({
      where: { debited_id: user.accountId },
    });
    return  func(data);
  } else {
    const data = await prisma.transactions.findMany({
      where: {
        OR: [
          { credited_id: user.accountId },
          { AND: { debited_id: user.accountId } },
        ],
      },
    });
    return  func(data);
  }
};

const func = async (data) => {
  return await Promise.all(
    data.map(async (el) => {
      const debited = await prisma.user.findFirst({
        where: { accountId: el.debited_id },
      });
      const credited = await prisma.user.findFirst({
        where: { accountId: el.credited_id },
      });
      const newObject = {
        debited_id: debited.username,
        credited_id: credited.username,
        value: el.value,
        createdAt: el.createdAt,
      };

      return newObject;
    })
  );
};
