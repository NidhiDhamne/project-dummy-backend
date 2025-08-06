// controllers/financialController.js
import { getFinancialsBySymbol } from "../../services/getFinancials.Service.js";

export async function getFinancials(req, res) {
  const symbol = req.params.symbol;
  if (!symbol) return res.status(400).json({ error: 'Symbol is required' });

  try {
    const data = await getFinancialsBySymbol(symbol);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch financials' });
  }
}


