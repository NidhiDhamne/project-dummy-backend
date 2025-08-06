import { stockSymbols } from '../../utils/stockSymbols.js';
import {
    getStocksAt52WeekHigh,
    getStocksAt52WeekLow,
    getVolumeSurgeStocks,
  } from '/C:/Users/Administrator/Desktop/project-dummy-data-testing/services/Trending.Service.js';
  
  export async function get52WeekHigh(req, res) {
    
    try {
      const result = await getStocksAt52WeekHigh(stockSymbols, 5);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch 52-week high stocks.' });
    }
  }
  
  export async function get52WeekLow(req, res) {
    try {
      const result = await getStocksAt52WeekLow(stockSymbols, 5);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch 52-week low stocks.' });
    }
  }
  
  export async function getVolumeSurges(req, res) {
    try {
      const result = await getVolumeSurgeStocks(stockSymbols, 5);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch volume surge stocks.' });
    }
  }
  