import { asyncHandler } from "../util/asyncHandler.js";
import { createFaculty, getFaculties } from "../service/facultyService.js";
import z from "zod";
import { ValidationError } from "../errors/AppError.js";
const getFacultiesHandler = asyncHandler(async (_req, res) => {
    const faculties = await getFaculties();
    const response = {
        success: true,
        message: "Successfully fetched all the faculties.",
        data: faculties,
        timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
});
const createFacultyHandler = asyncHandler(async (req, res) => {
    const result = z.object({
        name: z.string(),
    }).safeParse(req.body);
    if (!result.success) {
        throw new ValidationError("Please provide a valid body for name.");
    }
    const faculty = await createFaculty(result.data.name);
    const response = {
        success: true,
        message: "Successfully created a faculty.",
        data: faculty,
        timestamp: new Date().toISOString(),
    };
    return res.status(201).json(response);
});
export { createFacultyHandler, getFacultiesHandler };
//# sourceMappingURL=facultyController.js.map