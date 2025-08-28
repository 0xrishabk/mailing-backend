import type { JwtPayload } from "jsonwebtoken";

export interface LoginPayload extends JwtPayload {
  access: number;
  email: string;
  username: string;
};