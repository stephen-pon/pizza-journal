import { verifyJwt } from "@/app/lib/utils/auth.utils";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

interface PizzaParams {
  id: string;
}

// export async function GET(req: NextRequest, context: { params: PizzaParams }) {
//   try {
//     const bearer = req.headers.get('authorization')
//     const userId = verifyJwt(bearer)

//     const id = context.params.id
//     const res = await prisma.pizza.findFirst({
//       where: {
//         id,
//         userId,
//       },
//     })
//     return NextResponse.json(res, { status: 200 })
//   } catch (error) {
//     return NextResponse.json({ error })
//   }
// }

// interface PizzaUpdateBody {
//   name: string
//   ingredients: string[]
// }

// export async function POST(req: NextRequest, context: { params: PizzaParams }) {
//   try {
//     const bearer = req.headers.get('authorization')
//     const userId = verifyJwt(bearer)

//     const id = context.params.id
//     const body: PizzaUpdateBody = await req.json()

//     const res = await prisma.pizza.update({
//       where: {
//         id,
//         userId,
//       },
//       data: body,
//     })

//     return NextResponse.json(res, { status: 200 })
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 })
//   }
// }

// export async function DELETE(
//   req: NextRequest,
//   context: { params: PizzaParams },
// ) {
//   try {
//     const bearer = req.headers.get('authorization')
//     const userId = verifyJwt(bearer)

//     const id = context.params.id

//     const res = await prisma.pizza.delete({
//       where: {
//         id,
//         userId,
//       },
//     })
//     return NextResponse.json(res, { status: 200 })
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 })
//   }
// }
