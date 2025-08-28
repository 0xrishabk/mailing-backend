import jwt from "jsonwebtoken";
import prisma from "../database/prisma.js";
import type { LoginPayload } from "../model/JwtPayloadModel.js";

const signJwt = (payload: LoginPayload): string => {
  const key = process.env.JWT_SECRET;
  if (!key) {
    throw new Error(`JWT_SECRET is not defined.`);
  }
  return jwt.sign(payload, key, { algorithm: "HS256" });
}

const blackListJwt = async (token: string): Promise<boolean> => {
  await prisma.token.update({
    data: {
      isValid: false,
    },
    where: {
      token
    },
  });
  return true;
}

export { signJwt, blackListJwt };