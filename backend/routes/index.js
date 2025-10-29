const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// 🔔 Push Notification Endpoint
const pushHandler = require('./push');
app.use('/', pushHandler);

// 🎯 Recommendation Route
const recommendationRoutes = require('./recommendations');
app.use('/recommend', recommendationRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

console.log('✅ Routes loaded:', {
  products: typeof productRoutes,
  recommend: typeof recommendationRoutes,
  push: typeof pushRoutes
});