import z from "zod";
export declare const createUserSchema: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodEmail;
    inputPassword: z.ZodString;
}, z.z.core.$strip>;
export declare const loginUserSchema: z.ZodObject<{
    email: z.ZodEmail;
    inputPassword: z.ZodString;
}, z.z.core.$strip>;
export declare const deleteUserSchema: z.ZodObject<{
    id: z.ZodUUID;
}, z.z.core.$strip>;
//# sourceMappingURL=UserModel.d.ts.map