import jwt from "jsonwebtoken";
import prisma from "../database/prisma";
import type { LoginPayload } from "../model/JwtPayloadModel";

const signJwt = (payload: LoginPayload): string => {
  const key = process.env.JWT_SECRET;
  if (!key) {
    throw new Error(`JWT_SECRET is not defined.`);
  }

  return jwt.sign(payload, key, { algorithm: "HS256" });
}

const blackListJwt = async (accessToken: string): Promise<boolean> => {
  await prisma.token.update({
    data: {
      isValid: false,
    },
    where: {
      accessToken: accessToken,
    },
  });
  return true;
}

export { signJwt, blackListJwt };