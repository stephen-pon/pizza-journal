import { PizzaList } from "./ui/PizzaList";
import Link from "next/link";

export default function Pizzas() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <span className="text-3xl pb-8">Your Pizzas</span>
      <PizzaList />
      <Link
        className="mt-8 border-solid border-2 rounded-md"
        href="/pizzas/create"
      >
        Create a new pizza
      </Link>
    </div>
  );
}
