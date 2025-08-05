// app.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import newsRoutes from './routes/homepage/news.js';
//const newsRoutes = require('./routes/homepage/news');
//const indicesRoutes = require('./routes/homepage/indices');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/homepage/news', newsRoutes);
//app.use('/api/homepage/indices', indicesRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
