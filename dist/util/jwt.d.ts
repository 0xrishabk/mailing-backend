import type { LoginPayload } from "../model/JwtPayloadModel.js";
declare const signJwt: (payload: LoginPayload) => string;
declare const blackListJwt: (token: string) => Promise<boolean>;
export { signJwt, blackListJwt };
//# sourceMappingURL=jwt.d.ts.map