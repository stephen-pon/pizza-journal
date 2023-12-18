import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/app/lib/utils/auth.utils";
import { createPizza, getPizzasForUser } from "@/app/lib/data/pizza.data";
import { CreatePizzaBody } from "@/lib/definitions";

export async function GET(req: NextRequest) {
  try {
    const bearer = req.headers.get("authorization");
    const user = await verifyJwt(bearer);

    const res = await getPizzasForUser(user.id);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const bearer = req.headers.get("authorization");
    const user = await verifyJwt(bearer);

    const pizza: CreatePizzaBody = await req.json();

    const res = await createPizza(user.id, pizza);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
