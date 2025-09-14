import prisma from "../database/prisma.js";
import { ContactType } from "@prisma/client";
import { NotFoundError } from "../errors/AppError.js";

const createContact = async (name: string, email: string, phone: string, type: ContactType) => {
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

const getContacts = async (type: "ADMIN" | "STUDENT" | "MANAGEMENT" | "TEACHER" | undefined) => {
  const contacts = await prisma.contact.findMany({
    where: type ? { type: type as ContactType } : {},
  });

  if (contacts.length === 0) {
    throw new NotFoundError("No contacts were found.");
  }
  return contacts;
};

export {
  createContact,
  getContacts,
};