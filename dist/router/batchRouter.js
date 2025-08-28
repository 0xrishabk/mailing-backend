import { Router } from 'express';
import { createBatchHandler, getBatchesHandler } from '../controller/batchController.js';
const router = Router();
router.post('/', createBatchHandler);
router.get('/', getBatchesHandler);
export default router;
//# sourceMappingURL=batchRouter.js.map