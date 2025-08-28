import type { Response, NextFunction } from "express";
import type { AuthRequest } from "../model/RequestResponseModel.js";
import { Permission } from "../util/permission.js";
export declare const hasPermission: (permission: Permission[]) => (req: AuthRequest, _res: Response, next: NextFunction) => Promise<void>;
export declare const authenticateJwt: (req: AuthRequest, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=authHandler.d.ts.map