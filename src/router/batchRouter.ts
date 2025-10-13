import { Router } from 'express';
import { createBatchHandler, getBatchesHandler } from '../controller/batchController';

const router = Router();

router.post('/', createBatchHandler);

router.get('/', getBatchesHandler);

export default router;
