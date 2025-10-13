import prisma from "../database/prisma";
import { NotFoundError } from "../errors/AppError";

const sendMail = async (subject: string, content: string, replyTo: string, to: string[]) => {

};

const getMails = async () => {
  const mails = await prisma.mail.findMany();
  if (mails.length == 0) {
    throw new NotFoundError("No mail found.");
  }
  return mails;
}

export { sendMail, getMails };