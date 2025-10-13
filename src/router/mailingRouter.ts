import { Router } from 'express';
import { getMailsHandler, sendMailHandler } from '../controller/mailingController';
import { authenticateJwt, hasPermission } from '../middleware/authHandler';
import { Permission } from '../util/permission';

const router = Router();

router.get('/', authenticateJwt, hasPermission([Permission.Read]), getMailsHandler);

router.post('/', authenticateJwt, hasPermission([Permission.Mail]), sendMailHandler);

export default router;
