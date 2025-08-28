import jwt from "jsonwebtoken";
import prisma from "../database/prisma.js";
const signJwt = (payload) => {
    const key = process.env.JWT_SECRET;
    if (!key) {
        throw new Error(`JWT_SECRET is not defined.`);
    }
    return jwt.sign(payload, key, { algorithm: "HS256" });
};
const blackListJwt = async (token) => {
    await prisma.token.update({
        data: {
            isValid: false,
        },
        where: {
            token
        },
    });
    return true;
};
export { signJwt, blackListJwt };
//# sourceMappingURL=jwt.js.map