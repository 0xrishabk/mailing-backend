import { Router } from 'express';
const router = Router();
router.get('/', async (req, res) => {
    // Controller to gather all the contacts.
});
router.get('/students', async (req, res) => {
    // Controller to gather contact for all the students.
});
router.get('/teachers', async (req, res) => {
    // Controller to gather contact for all the teachers.
});
router.get('/management', async (req, res) => {
    // Controller to gather contact for all the management.
});
router.post('/', async (req, res) => {
    // Controller to create a new contact. 
});
router.put('/:id', async (req, res) => {
    // Controller to update a contact list.
});
router.delete('/:id', async (req, res) => {
    // Controller to delete a contact from the list.
});
export default router;
//# sourceMappingURL=contactRouter.js.map