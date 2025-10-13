import { Router } from 'express';
import {
  getUsersHandler,
  createUserHandler,
  deleteUserHandler,
  getUserHandler,
  getUserByEmailHandler,
  loginUserHandler,
  updateUserHandler
} from '../controller/userController';
import { authenticateJwt, hasPermission } from '../middleware/authHandler';
import { Permission } from '../util/permission';

const router = Router();
router.get('/', authenticateJwt, hasPermission([Permission.Admin]), getUsersHandler);
router.get('/id/:id', authenticateJwt, getUserHandler);
router.get('/email/:email', authenticateJwt, getUserByEmailHandler)

router.post('/login', loginUserHandler);
router.post('/', createUserHandler);

router.delete('/:id', authenticateJwt, deleteUserHandler);

router.put('/', authenticateJwt, updateUserHandler);

export default router;
