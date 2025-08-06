import {finnhubClient} from '../config/finnhub.config.js';
//import { stockSymbols } from '../utils/stockSymbols.js';


// Get random sample of stocks for 52-week highs
export function getStocksAt52WeekHigh(symbols, count = 5) {
  const shuffled = [...symbols].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}


// Get random sample of stocks for 52-week lows
export function getStocksAt52WeekLow(symbols, count = 5) {
  const shuffled = [...symbols].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}


export async function getVolumeSurgeStocks(symbols, count = 5) {
  const shuffled = [...symbols].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
