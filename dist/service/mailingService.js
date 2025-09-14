import prisma from "../database/prisma.js";
import { NotFoundError } from "../errors/AppError.js";
const sendMail = async (subject, content, replyTo, to) => {
};
const getMails = async () => {
    const mails = await prisma.mail.findMany();
    if (mails.length == 0) {
        throw new NotFoundError("No mail found.");
    }
    return mails;
};
export { sendMail, getMails };
//# sourceMappingURL=mailingService.js.map