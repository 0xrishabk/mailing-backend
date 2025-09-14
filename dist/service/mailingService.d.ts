declare const sendMail: (subject: string, content: string, replyTo: string, to: string[]) => Promise<void>;
declare const getMails: () => Promise<{
    id: number;
    createdAt: Date;
    subject: string;
    body: string;
}[]>;
export { sendMail, getMails };
//# sourceMappingURL=mailingService.d.ts.map