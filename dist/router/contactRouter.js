import { Router } from 'express';
import { createContactHandler, getContactsHandler } from '../controller/contactController.js';
const router = Router();
router.get('/', getContactsHandler);
router.post('/', createContactHandler);
router.put('/:id', async (req, res) => {
    // Controller to update a contact list.
});
router.delete('/:id', async (req, res) => {
    // Controller to delete a contact from the list.
});
export default router;
//# sourceMappingURL=contactRouter.js.map