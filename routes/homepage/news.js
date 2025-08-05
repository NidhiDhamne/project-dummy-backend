// routes/homepage/news.js
import express from 'express';
const router = express.Router();
import {getMarketNewsData} from '../../controllers/homepage/newsController.js';

router.get('/', getMarketNewsData);

export default router;
