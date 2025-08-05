// services/finnhubService.js

import finnhub from 'finnhub';

import dotenv from 'dotenv';
dotenv.config();
const finnhubClient = new finnhub.DefaultApi('d26a4spr01qh25lmj2bgd26a4spr01qh25lmj2c0');

// Fetch Market News
export const getMarketNews = async (category = 'general') => {
    
    finnhubClient.marketNews(category, {}, (error, data, response) => {
      if (error) {
        console.log('Error fetching market news: ' + error);
      } else {
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
        });

          return {
            id: data.id,
            category: data.category,
            headline: data.headline,
            image: data.image,
            source: data.source,
            summary: data.summary,
            url: data.url,
            published_at: data.datetime,
            related: data.related || 'No related articles',
          };
        };
      });
};
