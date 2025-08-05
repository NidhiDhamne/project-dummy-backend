// controllers/homepage/indicesController.js

//const yahooFinanceService = require('../../services/yahooFinanceService');
import {getMarketIndices} from '../../services/yahooFinanceService.js';

export const getIndicesData = async (req, res) => {
  try {
    const indices = await getMarketIndices();  // Fetch market indices data
    res.json(indices);
  } catch (error) {
    res.status(500).json({ message: "Error fetching market indices data" });
  }
};
