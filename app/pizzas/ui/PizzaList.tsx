import { callGetPizzasForUser } from "@/app/lib/actions/pizza.actions";
import PizzaCard from "./PizzaCard";

export async function PizzaList() {
  const pizzas = await callGetPizzasForUser();
  const pizzaCards = [];
  if (pizzas && pizzas.length > 0) {
    for (let p of pizzas) {
      pizzaCards.push(<PizzaCard key={p.id} pizza={p} />);
    }
  }

  return (
    <div>
      {pizzaCards.length > 0 ? (
        pizzaCards
      ) : (
        <span>You havent added a pizza yet</span>
      )}
    </div>
  );
}
