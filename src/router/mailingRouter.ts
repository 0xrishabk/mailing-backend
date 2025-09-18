import { Router } from 'express';
import { getMailsHandler, sendMailHandler } from '../controller/mailingController.js';
import { authenticateJwt, hasPermission } from '../middleware/authHandler.js';
import { Permission } from '../util/permission.js';

const router = Router();

router.get('/', authenticateJwt, hasPermission([Permission.Read]), getMailsHandler);

router.post('/', authenticateJwt, hasPermission([Permission.Mail]), sendMailHandler);

export default router;