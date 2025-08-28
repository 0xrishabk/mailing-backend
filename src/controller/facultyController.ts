import type { Request, Response } from "express";
import { asyncHandler } from "../util/asyncHandler.js";
import { createFaculty, getFaculties } from "../service/facultyService.js";
import type { ApiResponse } from "../model/ResponseModel.js";
import z from "zod";
import { ValidationError } from "../errors/AppError.js";

const getFacultiesHandler = asyncHandler(async (_req: Request, res: Response) => {
  const faculties = await getFaculties();
  const response: ApiResponse = {
    success: true,
    message: "Successfully fetched all the faculties.",
    data: faculties,
    timestamp: new Date().toISOString(),
  };
  return res.status(200).json(response);
});

const createFacultyHandler = asyncHandler(async (req: Request, res: Response) => {
  const result = z.object({
    name: z.string(),
  }).safeParse(req.body);
  if (!result.success) {
    throw new ValidationError("Please provide a valid body for name.");
  }

  const faculty = await createFaculty(result.data.name);
  const response: ApiResponse = {
    success: true,
    message: "Successfully created a faculty.",
    data: faculty,
    timestamp: new Date().toISOString(),
  };
  return res.status(201).json(response);
})

export { createFacultyHandler, getFacultiesHandler }