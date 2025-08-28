import { Router, type Request, type Response } from 'express';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  // Controller to gather all the contacts.
});

router.get('/students', async (req: Request, res: Response) => {
  // Controller to gather contact for all the students.
});

router.get('/teachers', async (req: Request, res: Response) => {
  // Controller to gather contact for all the teachers.
});

router.get('/management', async (req: Request, res: Response) => {
  // Controller to gather contact for all the management.
});

router.post('/', async (req: Request, res: Response) => {
  // Controller to create a new contact. 
});

router.put('/:id', async (req: Request, res: Response) => {
  // Controller to update a contact list.
});

router.delete('/:id', async (req: Request, res: Response) => {
  // Controller to delete a contact from the list.
});

export default router;