// app.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import newsRoutes from './routes/homepage/news.js';
import trendingRoutes from './routes/homepage/trending.js';
import financials from './routes/homepage/financials.js'


import { db } from './config/db.js'; // Importing the database connection
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
const corsOptions = {
  origin: 'http://127.0.0.1:5500', // Allow only requests from this origin
  methods: 'GET', // Allow only these methods// Allow only these headers
};
app.use(cors(corsOptions));

// Routes
app.use('/api/homepage/news', newsRoutes);
app.use('/api/homepage/trending', trendingRoutes);
app.use('/api/homepage/details/',financials);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




