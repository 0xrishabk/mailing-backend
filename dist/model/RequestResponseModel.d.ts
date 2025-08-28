import type { LoginPayload } from "./JwtPayloadModel.js";
import type { Request } from "express";
export interface AuthRequest extends Request {
    user?: LoginPayload | string;
}
//# sourceMappingURL=RequestResponseModel.d.ts.map