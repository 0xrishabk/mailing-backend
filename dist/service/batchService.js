import prisma from "../database/prisma.js";
import { NotFoundError } from "../errors/AppError.js";
const getBatches = async () => {
    const batches = await prisma.batch.findMany();
    if (!batches) {
        throw new NotFoundError("No batch was found in the database.");
    }
    return batches;
};
const createBatch = async (year) => {
    const batch = await prisma.batch.create({
        data: {
            year,
        }
    });
    return batch;
};
export { getBatches, createBatch };
//# sourceMappingURL=batchService.js.map