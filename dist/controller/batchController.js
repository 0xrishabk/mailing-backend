import { asyncHandler } from "../util/asyncHandler.js";
import z from "zod";
import { createBatch, getBatches } from "../service/batchService.js";
import { ValidationError } from "../errors/AppError.js";
const getBatchesHandler = asyncHandler(async (_req, res) => {
    const batches = await getBatches();
    const response = {
        success: true,
        message: "Successfully retrieved the batch.",
        data: batches,
        timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
});
const createBatchHandler = asyncHandler(async (req, res) => {
    const result = z.object({
        year: z.string(),
    }).safeParse(req.body);
    if (!result.success) {
        throw new ValidationError("Please provide a valid data to create a batch.");
    }
    const batch = await createBatch(result.data.year);
    const response = {
        success: true,
        message: "Successfully created a batch.",
        data: batch,
        timestamp: new Date().toISOString(),
    };
    return res.status(201).json(response);
});
export { createBatchHandler, getBatchesHandler };
//# sourceMappingURL=batchController.js.map