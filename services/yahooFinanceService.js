// services/yahooFinanceService.js

import yahooFinance from 'yahoo-finance2';
const { yahooFinanceApiKey } = require('../config/config');

// Fetch Market Indices
export const getMarketIndices = async () => {
  try {
    const sp500 = await yahooFinance.quote('^GSPC');  // S&P 500
    const nasdaq = await yahooFinance.quote('^IXIC');  // NASDAQ
    const dowJones = await yahooFinance.quote('^DJI');  // Dow Jones

    return {
      sp500,
      nasdaq,
      dowJones,
    };
  } catch (error) {
    console.error("Error fetching market indices:", error);
    return {};
  }
};

