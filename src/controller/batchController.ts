import type { Request, Response } from "express";
import { asyncHandler } from "../util/asyncHandler.js";
import z from "zod";
import { createBatch, getBatches } from "../service/batchService.js";
import type { ApiResponse } from "../model/ResponseModel.js";
import { ValidationError } from "../errors/AppError.js";

const getBatchesHandler = asyncHandler(async (_req: Request, res: Response) => {
  const batches = await getBatches();
  const response: ApiResponse = {
    success: true,
    message: "Successfully retrieved the batch.",
    data: batches,
    timestamp: new Date().toISOString(),
  };
  return res.status(200).json(response);
});

const createBatchHandler = asyncHandler(async (req: Request, res: Response) => {
  const result = z.object({
    year: z.string(),
  }).safeParse(req.body);
  if (!result.success) {
    throw new ValidationError("Please provide a valid data to create a batch.");
  }

  const batch = await createBatch(result.data.year);
  const response: ApiResponse = {
    success: true,
    message: "Successfully created a batch.",
    data: batch,
    timestamp: new Date().toISOString(),
  };
  return res.status(201).json(response);
});

export { createBatchHandler, getBatchesHandler };