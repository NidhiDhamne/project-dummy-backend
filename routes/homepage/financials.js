import express from 'express';
import { getFinancials } from '../../controllers/homepage/financialsController.js';
const router = express.Router();

router.get('/:symbol', getFinancials);

export default router;
