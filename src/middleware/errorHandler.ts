import type { Request, Response, NextFunction } from "express";
import type { ApiResponse } from "../model/ResponseModel.js";
import { AppError } from "../errors/AppError.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    const response: ApiResponse = {
      success: false,
      message: err.message,
      errors: err.name,
      timestamp: new Date().toISOString(),
    };
    return res.status(err.statusCode).json(response);
  }

  if (err instanceof PrismaClientKnownRequestError) {
    if (err.code == 'P2002') {
      const response: ApiResponse = {
        success: false,
        message: "Username or email already exists.",
        errors: err.name,
        timestamp: new Date().toISOString(),
      };
      return res.status(400).json(response);
    }

    if (err.code == 'P2007') {
      const response: ApiResponse = {
        success: false,
        message: "Invalid input data.",
        errors: err.name,
        timestamp: new Date().toISOString(),
      };
      return res.status(400).json(response);
    }
  }

  const response: ApiResponse = {
    success: false,
    message: err.message || "Something went wrong",
    errors: err.errors,
    timestamp: new Date().toISOString(),
  };
  return res.status(500).json(response);
};