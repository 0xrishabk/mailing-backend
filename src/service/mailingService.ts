import prisma from "../database/prisma.js";
import { NotFoundError } from "../errors/AppError.js";

const sendMail = async (subject: string, content: string, replyTo: string, to: string[]) => {

};

const getMails = async () => {
  const result = await prisma.mail.findMany();
  if (!result) {
    throw new NotFoundError("No mail found.");
  }
  return result;
}

export { sendMail, getMails };