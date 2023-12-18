import { prisma } from "../utils/prisma.utils";

export async function getPizzasForUser(userId: string) {
  return await prisma.pizza.findMany({
    where: {
      userId,
    },
  });
}
