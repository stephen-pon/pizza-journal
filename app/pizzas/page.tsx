import SignOut from "@/components/sign-out";
import { PizzaList } from "./ui/PizzaList";

export default function Pizzas() {
  return (
    <div>
      <h1>Welcome to the Pizzas Page!</h1>
      <PizzaList />
      <SignOut />
    </div>
  );
}
