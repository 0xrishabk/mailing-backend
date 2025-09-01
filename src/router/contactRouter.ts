import { Router, type Request, type Response } from 'express';
import { createContactHandler, getContactsHandler, getTeacherContactsHandler } from '../controller/contactController.js';
import { getManagementContacts, getStudentContacts } from '../service/contactService.js';

const router = Router();

router.get('/', getContactsHandler);

router.get('/students', getStudentContacts);

router.get('/teachers', getTeacherContactsHandler);

router.get('/management', getManagementContacts);

router.post('/', createContactHandler);

router.put('/:id', async (req: Request, res: Response) => {
  // Controller to update a contact list.
});

router.delete('/:id', async (req: Request, res: Response) => {
  // Controller to delete a contact from the list.
});

export default router;