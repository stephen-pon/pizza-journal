import { CreatePizzaBody, PizzaUpdateBody } from "@/lib/definitions";
import { prisma } from "../utils/prisma.utils";

export async function getPizzasForUser(userId: string) {
  return await prisma.pizza.findMany({
    where: {
      userId,
    },
  });
}

export async function createPizza(userId: string, pizza: CreatePizzaBody) {
  const sameNamePizzas = await prisma.pizza.findFirst({
    where: {
      name: pizza.name,
      userId,
    },
  });
  if (sameNamePizzas) throw "Pizza with that name already exists";

  return await prisma.pizza.create({
    data: {
      ...pizza,
      userId,
    },
  });
}

export async function getPizza(id: string) {
  return await prisma.pizza.findFirstOrThrow({
    where: {
      id,
    },
  });
}

export async function updatePizza(id: string, data: PizzaUpdateBody) {
  return await prisma.pizza.update({
    where: {
      id,
    },
    data,
  });
}

export async function deletePizza(id: string) {
  return await prisma.pizza.delete({
    where: {
      id,
    },
  });
}
