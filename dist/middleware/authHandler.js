import jwt from "jsonwebtoken";
import { AppError, AuthError, NotFoundError } from "../errors/AppError.js";
import prisma from "../database/prisma.js";
import { Permission, PermissionUtil } from "../util/permission.js";
export const hasPermission = (permission) => {
    return async (req, _res, next) => {
        try {
            const user = req.user;
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
            const hasAllPermission = permission.every((perm) => PermissionUtil.has(result.permission, perm));
            if (!hasAllPermission) {
                throw new AuthError("Unauthorized");
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
export const authenticateJwt = (req, _res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new AppError("Authorization header missing.", 401, "AuthTokenError");
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        throw new AppError("Token missing.", 401, "AuthTokenError");
    }
    try {
        const key = process.env.JWT_SECRET;
        const decoded = jwt.verify(token, key);
        req.user = decoded;
        next();
    }
    catch (err) {
        if (err.name === "TokenExpiredError") {
            throw new AppError("Token expired.", 401, "AuthTokenError");
        }
        throw new AppError("Invalid Token", 401, "AuthTokenError");
    }
};
//# sourceMappingURL=authHandler.js.map