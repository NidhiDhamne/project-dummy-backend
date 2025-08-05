// config/config.js
import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  finnhubApiKey: process.env.FINNHUB_API_KEY,
  yahooFinanceApiKey: process.env.YAHOO_FINANCE_API_KEY,  // If you have one
  port: process.env.PORT || 5000,
};
