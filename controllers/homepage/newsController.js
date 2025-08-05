// controllers/homepage/newsController.js
import { getMarketNews } from '../../services/finnhubService.js';
import { shuffleArray } from '../../utils/shuffle.js';

export const getMarketNewsData = async (req, res) => {
  try {
    // Fetching news from Finnhub (you can pass any category like 'general', 'business', etc.)
    const news = await getMarketNews('general');
    
    // Shuffle the news articles
    const shuffledNews = shuffleArray(news);
    
    // Get the top 10 shuffled articles
    const top10News = shuffledNews.slice(0, 10);
    
    // Send the shuffled top 10 news articles in the response
    res.json({
      message: "Top 10 randomized news fetched successfully",
      data: top10News
    });
  } catch (error) {
    // Handle errors by sending a response with an error message
    res.status(500).json({
      message: "Error fetching market news",
      error: error.message || error
    });
  }
};

