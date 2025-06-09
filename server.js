// server.js - Starter Express server for Week 2 assignment

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const productRoutes = require('./routes/productRoutes')
const loggerMiddleware = require('./middlewares/loggerMiddleware')
const { errorHandler } = require('./middlewares/errorHandlerMiddleware')
require('dotenv').config()

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
// middleware to parse JSON request bodies
app.use(bodyParser.json());

// use the error handler middle ware
app.use(errorHandler)

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// Product routte
app.use('/api/products', loggerMiddleware, productRoutes)

// Example route implementation for GET /api/products
// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// TODO: Implement custom middleware for:
// - Request logging
// - Authentication
// - Error handling

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app; 