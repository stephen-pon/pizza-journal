export interface JwtTokenValues {
  id: string;
  email: string;
}

export interface CreatePizzaBody {
  name: string;
  ingredients: string[];
}
