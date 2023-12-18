import { Pizza } from "@prisma/client";
import Link from "next/link";

export default async function PizzaCard({ pizza }: { pizza: Pizza }) {
  return (
    <Link
      href={`/pizzas/${pizza.id}`}
      className="flex cursor-pointer justify-center p-4 w-80 border-solid border-2 rounded-md"
    >
      <span>{pizza.name}</span>
    </Link>
  );
}
