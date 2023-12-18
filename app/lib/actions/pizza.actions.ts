import { getServerSession } from "next-auth/next";
import { getUserFromEmail } from "../data/user.data";
import { getPizzasForUser } from "../data/pizza.data";

export async function getPizzas() {
  console.log("GET PIZZAS CALLED");
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
