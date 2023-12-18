import { deletePizza, getPizza, updatePizza } from "@/app/lib/data/pizza.data";
import { verifyJwt } from "@/app/lib/utils/auth.utils";
import { PizzaId, PizzaUpdateBody } from "@/lib/definitions";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, context: { params: PizzaId }) {
  try {
    const bearer = req.headers.get("authorization");
    verifyJwt(bearer);

    const { id } = context.params;

    const res = await getPizza(id);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(req: NextRequest, context: { params: PizzaId }) {
  try {
    const bearer = req.headers.get("authorization");
    verifyJwt(bearer);

    const id = context.params.id;
    const body: PizzaUpdateBody = await req.json();

    const res = await updatePizza(id, body);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: { params: PizzaId }) {
  try {
    const bearer = req.headers.get("authorization");
    verifyJwt(bearer);

    const id = context.params.id;

    const res = await deletePizza(id);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
