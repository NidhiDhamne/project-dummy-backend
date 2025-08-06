import { finnhubClient } from "../config/finnhub.config.js";


export async function getFinancialsBySymbol(symbol) {
    try {
      const [quote, metrics] = await Promise.all([
        new Promise((resolve, reject) =>
          finnhubClient.quote(symbol, (error, data) =>
            error ? reject(error) : resolve(data)
          )
        ),
        new Promise((resolve, reject) =>
          finnhubClient.companyBasicFinancials(symbol, 'all', (error, data) =>
            error ? reject(error) : resolve(data)
          )
        )
      ]);
  
      return {
        symbol,
        currentPrice: quote.c,
        peRatio: metrics?.metric?.peNormalizedAnnual,
        eps: metrics?.metric?.epsNormalizedAnnual,
        marketCap: metrics?.metric?.marketCapitalization
      };
    } catch (error) {
      console.error('Error fetching financials for', symbol, error);
      throw error;
    }
  }
  