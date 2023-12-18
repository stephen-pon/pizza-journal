import { getPizzas } from "@/app/lib/actions/pizza.actions";

export async function PizzaList() {
  const pizzas = await getPizzas();
  console.log(pizzas);

  return (
    <div>
      <h1>Pizza list is here</h1>
      <span>Put pizzas here</span>
    </div>
  );
}
