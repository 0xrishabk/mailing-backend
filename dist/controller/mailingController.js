import z from "zod";
import { ValidationError } from "../errors/AppError.js";
import { getMails, sendMail } from "../service/mailingService.js";
const sendMailHandler = async (req, res) => {
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
    const mail = await sendMail(subject, content, replyTo, to);
    const response = {
        success: true,
        message: "Successfully sent mail.",
        data: mail,
        timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
};
const getMailsHandler = async (req, res) => {
    const mails = await getMails();
    const response = {
        success: true,
        message: "Successfully fetched the mail",
        data: mails,
        timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
};
export { sendMailHandler, getMailsHandler };
//# sourceMappingURL=mailingController.js.map