import type { Request, Response } from "express"
import z from "zod"
import { ValidationError } from "../errors/AppError.js";
import type { ApiResponse } from "../model/ResponseModel.js";
import { getMails, sendMail } from "../service/mailingService.js";

const sendMailHandler = async (req: Request, res: Response) => {
  const result = z.object({
    subject: z.string(),
    content: z.string(),
    replyTo: z.email(),
    to: z.email().array(),
  }).safeParse(req.body);

  if (!result.success) {
    throw new ValidationError("Invalid Body.");
  }

  const { subject, content, replyTo, to } = result.data;

  const data = await sendMail(subject, content, replyTo, to);

  const response: ApiResponse = {
    success: true,
    message: "Successfully sent mail.",
    data,
    timestamp: new Date().toISOString(),
  };
  return res.status(200).json(response);
};

const getMailsHandler = async (req: Request, res: Response) => {
  const data = await getMails();
  const response: ApiResponse = {
    success: true,
    message: "Successfully fetched the mail",
    data,
    timestamp: new Date().toISOString(),
  };
  return res.status(200).json(response);
};

export { sendMailHandler, getMailsHandler };