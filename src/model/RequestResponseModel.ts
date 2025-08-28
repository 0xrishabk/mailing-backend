import type { LoginPayload } from "./JwtPayloadModel.ts";
import type { Request } from "express";

export interface AuthRequest extends Request {
  user?: LoginPayload | string;
};
