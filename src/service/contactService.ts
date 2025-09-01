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

const getContacts = async () => {
  const contacts = await prisma.contact.findMany({});
  if (contacts.length == 0) {
    throw new NotFoundError("No contacts found please add one.");
  }
  return contacts;
};

const getStudentContacts = async () => {
  const contacts = await prisma.contact.findMany({
    where: {
      type: 'STUDENT',
    },
  });
  if (contacts.length == 0) {
    throw new NotFoundError("No students contacts were found.");
  }
  return contacts;
};

const getTeacherContacts = async () => {
  const contacts = await prisma.contact.findMany({
    where: {
      type: 'TEACHER',
    },
  });
  if (contacts.length == 0) {
    throw new NotFoundError("No teachers were found.");
  }
  return contacts;
};

const getManagementContacts = async () => {
  const contacts = await prisma.contact.findMany({
    where: {
      type: 'MANAGEMENT',
    },
  });
  if (contacts.length == 0) {
    throw new NotFoundError("No management were found.");
  }
  return contacts;
};

export {
  createContact,
  getContacts,
  getStudentContacts,
  getTeacherContacts,
  getManagementContacts
};