import prisma from "../database/prisma.js";
import { ContactType } from "@prisma/client";
import { NotFoundError } from "../errors/AppError.js";
const createContact = async (name, email, phone, type) => {
    const contact = await prisma.contact.create({
        data: {
            name,
            email,
            phone,
            type,
        },
    });
    return contact;
};
const getContacts = async (type) => {
    const contacts = await prisma.contact.findMany({
        where: type ? { type: type } : {},
    });
    if (contacts.length === 0) {
        throw new NotFoundError("No contacts were found.");
    }
    return contacts;
};
export { createContact, getContacts, };
//# sourceMappingURL=contactService.js.map