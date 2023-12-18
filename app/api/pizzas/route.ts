import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/app/lib/utils/auth.utils";
import { getPizzasForUser } from "@/app/lib/data/pizza.data";

export async function GET(req: NextRequest) {
  try {
    const bearer = req.headers.get("authorization");
    const user = await verifyJwt(bearer);

    const res = await getPizzasForUser(user.email);
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// interface CreatePizzaBody {
//   name: string;
//   ingredients: string[];
// }

// export async function PUT(req: NextRequest) {
//   try {
//     const bearer = req.headers.get("authorization");
//     const userId = verifyJwt(bearer);

//     const { name, ingredients }: CreatePizzaBody = await req.json();

//     const sameNamePizzas = await prisma.pizza.findFirst({
//       where: {
//         name,
//         userId,
//       },
//     });
//     if (sameNamePizzas) throw "Pizza with that name already exists";

//     const res = await prisma.pizza.create({
//       data: {
//         name,
//         ingredients,
//         userId,
//       },
//     });
//     return NextResponse.json(res, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
