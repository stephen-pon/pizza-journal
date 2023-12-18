import { getServerSession } from "next-auth/next";
import { getUserFromEmail } from "../data/user.data";
import { getPizzasForUser, getPizza } from "../data/pizza.data";
import { Pizza } from "@prisma/client";

export async function callGetPizzasForUser(): Promise<Pizza[] | undefined> {
  try {
    const session = await getServerSession();
    if (!session || !session.user || !session.user.email)
      throw "Invalid session";

    const user = await getUserFromEmail(session.user.email);
    return getPizzasForUser(user.id);
  } catch (err) {
    console.log(err);
  }
}

export async function callGetPizza(id: string): Promise<Pizza> {
  return getPizza(id);
}
