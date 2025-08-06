import express from 'express';
import {
  get52WeekHigh,
  get52WeekLow,
  getVolumeSurges,
} from '/C:/Users/Administrator/Desktop/project-dummy-data-testing/controllers/homepage/trendingController.js';

const router = express.Router();

router.get('/high', get52WeekHigh);
router.get('/low', get52WeekLow);
router.get('/volume', getVolumeSurges);


export default router;
