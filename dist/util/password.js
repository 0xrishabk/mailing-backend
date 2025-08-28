import { hash, compare } from "bcrypt";
export const hashPassword = async (password) => {
    const saltRounds = 10;
    return await hash(password, saltRounds);
};
export const comparePassword = async (password, hashedPassword) => {
    return await compare(password, hashedPassword);
};
//# sourceMappingURL=password.js.map