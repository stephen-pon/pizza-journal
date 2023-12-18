import { prisma } from "../utils/prisma.utils";

export async function getUserFromEmail(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) throw "User not found";

  return user;
}
