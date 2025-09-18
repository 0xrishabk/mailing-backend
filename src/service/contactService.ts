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

const getContacts = async (type?: "ADMIN" | "STUDENT" | "MANAGEMENT" | "TEACHER") => {
  const contacts = await prisma.contact.findMany({
    where: type ? { type: type as ContactType } : {},
  });

  if (contacts.length === 0) {
    throw new NotFoundError("No contacts were found.");
  }
  return contacts;
};

const updateContact = async (
  id: number,
  name?: string,
  email?: string,
  phone?: string,
  type?: "ADMIN" | "STUDENT" | "MANAGEMENT" | "TEACHER") => {

  const dataToUpdate: Record<string, any> = {};

  if (name) dataToUpdate.name = name;
  if (email) dataToUpdate.email = email;
  if (phone) dataToUpdate.phone = phone;
  if (type) dataToUpdate.type = type;

  const contacts = await prisma.contact.update({
    data: dataToUpdate,
    where: {
      id
    },
  });
  return contacts;
};

const deleteContact = async (id: number) => {
  await prisma.contact.delete({
    where: {
      id,
    },
  });
};

export {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
};