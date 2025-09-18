import type { Request, Response } from "express";
import { asyncHandler } from "../util/asyncHandler.js";
import type { ApiResponse } from "../model/ResponseModel.js";
import {
  getContacts,
  createContact,
  updateContact,
  deleteContact
} from "../service/contactService.js";
import z from "zod";
import { ValidationError } from "../errors/AppError.js";
import { ContactType } from "@prisma/client";

const createContactHandler = asyncHandler(async (req: Request, res: Response) => {
  const result = z.object({
    name: z.string(),
    email: z.email(),
    phone: z.string(),
    type: z.string(),
  }).safeParse(req.body);

  if (!result.success) {
    throw new ValidationError("Invalid Body.");
  }

  const { name, email, phone, type } = result.data;
  if (!Object.values(ContactType).includes(type.toUpperCase() as ContactType)) {
    throw new ValidationError("Invalid Contact Types.");
  }

  const contact = createContact(name, email, phone, type.toUpperCase() as ContactType);

  const response: ApiResponse = {
    success: true,
    message: "Successfully created contacts.",
    data: contact,
    timestamp: new Date().toISOString(),
  };
  return res.status(201).json(response);
});

const getContactsHandler = asyncHandler(async (req: Request, res: Response) => {
  const result = z.object({
    role: z.enum(['STUDENT', 'TEACHER', 'MANAGEMENT', 'ADMIN']).optional(),
  }).safeParse(req.query);

  if (!result.success) {
    throw new ValidationError("Invalid request.");
  }

  const type = result.data.role;

  const contacts = await getContacts(type);

  const response: ApiResponse = {
    success: true,
    message: "Successfully created contacts.",
    data: contacts,
    timestamp: new Date().toISOString(),
  };
  return res.status(200).json(response);
});

const updateContactHandler = asyncHandler(async (req: Request, res: Response) => {
  const param = z.object({
    id: z.number(),
  }).safeParse(req.params);

  if (!param.success) {
    throw new ValidationError("Provide id in query");
  }

  const body = z.object({
    name: z.string().optional(),
    email: z.email().optional(),
    phone: z.string().optional(),
    type: z.enum(['STUDENT', 'TEACHER', 'MANAGEMENT', 'ADMIN']).optional()
  }).safeDecode(req.body);

  if (!body.success) {
    throw new ValidationError("Provide valid input data.");
  }

  const id = param.data.id;

  const { name, email, phone, type } = body.data;

  const contact = await updateContact(id, name, email, phone, type);
  const response: ApiResponse = {
    success: true,
    message: "Successfully updated the data",
    data: contact,
    timestamp: new Date().toISOString(),
  };
  return res.status(200).json(response);
});

const deleteContactHandler = asyncHandler(async (req: Request, res: Response) => {
  const param = z.object({
    id: z.number(),
  }).safeParse(req.params);

  if (!param.success) {
    throw new ValidationError("Please pass an id as parameter.");
  }

  await deleteContact(param.data.id);
  return res.status(204);
});

/* 
const getContactsHandler = asyncHandler(async (_req: Request, res: Response) => {
  const contacts = await getContacts();
  const response: ApiResponse = {
    success: true,
    message: "Successfully fetched batches.",
    data: contacts,
    timestamp: new Date().toISOString(),
  };
  return res.status(200).json(response);
});

const getStudentContactsHandler = asyncHandler(async (_req: Request, res: Response) => {
  const contacts = await getStudentContacts();
  const response: ApiResponse = {
    success: true,
    message: "Successfully fetched students contact.",
    data: contacts,
    timestamp: new Date().toISOString(),
  };
  return res.status(200).json(response);
});

const getTeacherContactsHandler = asyncHandler(async (_req: Request, res: Response) => {
  const contacts = await getTeacherContacts();
  const response: ApiResponse = {
    success: true,
    message: "Successfully fetched teachers contact.",
    data: contacts,
    timestamp: new Date().toISOString(),
  };
  return res.status(200).json(response);
});

const getManagementContactsHandler = asyncHandler(async (_req: Request, res: Response) => {
  const contacts = await getManagementContacts();
  const response: ApiResponse = {
    success: true,
    message: "Successfully fetched management contacts.",
    data: contacts,
    timestamp: new Date().toISOString(),
  };
  return res.status(200).json(response);
});
 */
export {
  createContactHandler,
  getContactsHandler,
  updateContactHandler,
  deleteContactHandler,
};