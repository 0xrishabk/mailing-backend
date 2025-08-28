import z from "zod";

export const createUserSchema = z.object({
  username: z.string().min(3),
  email: z.email(),
  inputPassword: z.string().min(6),
});

export const loginUserSchema = z.object({
  email: z.email(),
  inputPassword: z.string(),
});

export const deleteUserSchema = z.object({
  id: z.uuid(),
});