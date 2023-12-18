import { JwtTokenValues } from "@/lib/definitions";
import { User } from "@prisma/client";
import * as jwt from "jsonwebtoken";
import { getUserFromEmail } from "../data/user.data";

export async function verifyJwt(bearer: string | null): Promise<User> {
  if (!bearer) throw "auth token required";
  const token = bearer.split(" ")[1];

  const decoded = jwt.verify(
    token,
    "insert private key here"
  ) as JwtTokenValues;

  return await getUserFromEmail(decoded.email);
}
