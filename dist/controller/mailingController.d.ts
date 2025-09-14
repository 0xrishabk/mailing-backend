import type { Request, Response } from "express";
declare const sendMailHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const getMailsHandler: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { sendMailHandler, getMailsHandler };
//# sourceMappingURL=mailingController.d.ts.map