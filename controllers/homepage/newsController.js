// controllers/homepage/newsController.js
import {getMarketNews} from '../../services/finnhubService.js';
//const finnhubService = require('../../services/finnhubService');

export const getMarketNewsData = async (req, res) => {
  try {
    const news = await getMarketNews('general');
    res.json({
      message: "Successfully fetched market news",
      data: news // the data you're sending back
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
