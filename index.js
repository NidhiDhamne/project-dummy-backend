import express from 'express';
const router = express.Router();
const indicesController = require('../../controllers/homepage/indicesController');
const trendingController = require('../../controllers/homepage/trendingController');
const summaryController = require('../../controllers/homepage/marketSummaryController');
const newsController = require('../../controllers/homepage/newsController');

router.get('/', async (req, res) => {
  try {
    const [indices, trending, summary, news] = await Promise.all([
      indicesController.getIndicesData(),
      trendingController.getAllTrending(),
      summaryController.getMarketSummaryData(),
      newsController.getMarketNewsData(),
    ]);

    res.json({
      indices,
      trending,
      market_summary: summary,
      news,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching homepage data" });
  }
});

module.exports = router;
