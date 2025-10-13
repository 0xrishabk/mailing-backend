import { Router } from "express";
import { createFacultyHandler, getFacultiesHandler } from "../controller/facultyController";

const router = Router();

router.post('/', createFacultyHandler);

router.get('/', getFacultiesHandler);

export default router;