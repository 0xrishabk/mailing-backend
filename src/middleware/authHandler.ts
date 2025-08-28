import jwt from "jsonwebtoken"
import type { LoginPayload } from "../model/JwtPayloadModel.js"
import type { Response, NextFunction } from "express";
import { AppError, AuthError, NotFoundError } from "../errors/AppError.js";
import type { AuthRequest } from "../model/RequestResponseModel.js";
import prisma from "../database/prisma.js";
import { Permission, PermissionUtil } from "../util/permission.js";

export const hasPermission = (permission: Permission[]) => {
  return async (req: AuthRequest, _res: Response, next: NextFunction) => {
    try {
      const user = req.user as LoginPayload;

      if (!user) {
        throw new AuthError("Unauthorized");
      }

      const result = await prisma.user.findUnique({
        where: {
          email: user.email,
        },
        select: {
          permission: true,
        },
      });

      if (!result) {
        throw new NotFoundError("User was not found.");
      }

      const hasAllPermission = permission.every((perm) =>
        PermissionUtil.has(result.permission, perm),
      );

      if (!hasAllPermission) {
        throw new AuthError("Unauthorized");
      }

      next();
    } catch (err: any) {
      next(err);
    }
  }
}

export const authenticateJwt = (
  req: AuthRequest,
  _res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AppError("Authorization header missing.", 401, "AuthTokenError");
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    throw new AppError("Token missing.", 401, "AuthTokenError");
  }

  try {
    const key = process.env.JWT_SECRET!;
    const decoded = jwt.verify(token, key) as LoginPayload;
    req.user = decoded;
    next();
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      throw new AppError("Token expired.", 401, "AuthTokenError");
    }
    throw new AppError("Invalid Token", 401, "AuthTokenError");
  }
};