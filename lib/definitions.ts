export interface JwtTokenValues {
  id: string;
  email: string;
}

export interface CreatePizzaBody {
  name: string;
  ingredients: string[];
}

export interface PizzaId {
  id: string;
}

export interface PizzaUpdateBody {
  name: string;
  ingredients: string[];
}
