import { Router, type Request, type Response } from 'express';
import { createContactHandler, deleteContactHandler, getContactsHandler, updateContactHandler } from '../controller/contactController.js';
const router = Router();

router.get('/', getContactsHandler);

router.post('/', createContactHandler);

router.put('/:id', updateContactHandler);

router.delete('/:id', deleteContactHandler);

export default router;