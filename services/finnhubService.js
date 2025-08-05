// services/finnhubService.js

import finnhub from 'finnhub';

import dotenv from 'dotenv';
dotenv.config();
const finnhubClient = new finnhub.DefaultApi('d26a4spr01qh25lmj2bgd26a4spr01qh25lmj2c0');

export const getMarketNews = (category = 'general') => {
  return new Promise((resolve, reject) => {
    finnhubClient.marketNews(category, {}, (error, data,response) => {
      if (error) {
        reject('Error fetching market news: ' + error);
      } else {
        // Format the news data for ease of use in other parts of the app
        const formattedNews = data.map((article) => {
          // Convert datetime to a readable format
          const date = new Date(article.datetime * 1000);
          const formattedDate = date.toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
          });

          return {
            id: article.id,
            category: article.category,
            headline: article.headline,
            image: article.image,
            source: article.source,
            summary: article.summary,
            url: article.url,
            published_at: formattedDate,
            related: article.related || 'No related articles',
          };
        });

        resolve(formattedNews);  // Return the formatted list of news articles
      }
    });
  });
};
