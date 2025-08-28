import { AppError } from "../errors/AppError.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
export const errorHandler = (err, req, res, next) => {
    if (err instanceof AppError) {
        const response = {
            success: false,
            message: err.message,
            errors: err.name,
            timestamp: new Date().toISOString(),
        };
        return res.status(err.statusCode).json(response);
    }
    if (err instanceof PrismaClientKnownRequestError) {
        if (err.code == 'P2002') {
            const response = {
                success: false,
                message: "Username or email already exists.",
                errors: err.name,
                timestamp: new Date().toISOString(),
            };
            return res.status(400).json(response);
        }
        if (err.code == 'P2007') {
            const response = {
                success: false,
                message: "Invalid input data.",
                errors: err.name,
                timestamp: new Date().toISOString(),
            };
            return res.status(400).json(response);
        }
    }
    const response = {
        success: false,
        message: err.message || "Something went wrong",
        errors: err.errors,
        timestamp: new Date().toISOString(),
    };
    return res.status(500).json(response);
};
//# sourceMappingURL=errorHandler.js.map