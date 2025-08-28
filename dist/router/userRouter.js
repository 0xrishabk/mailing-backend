import { Router } from 'express';
import { getUsersHandler, createUserHandler, deleteUserHandler, getUserHandler, loginUserHandler, updateUserHandler } from '../controller/userController.js';
import { authenticateJwt, hasPermission } from '../middleware/authHandler.js';
import { Permission } from '../util/permission.js';
const router = Router();
router.get('/', authenticateJwt, hasPermission([Permission.Admin]), getUsersHandler);
router.get('/id/:id', authenticateJwt, getUserHandler);
router.post('/login', loginUserHandler);
router.post('/register', createUserHandler);
router.delete('/:id', authenticateJwt, deleteUserHandler);
router.put('/', authenticateJwt, updateUserHandler);
export default router;
//# sourceMappingURL=userRouter.js.map