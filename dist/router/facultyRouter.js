import { Router } from "express";
import { createFacultyHandler, getFacultiesHandler } from "../controller/facultyController.js";
const router = Router();
router.post('/', createFacultyHandler);
router.get('/', getFacultiesHandler);
export default router;
//# sourceMappingURL=facultyRouter.js.map