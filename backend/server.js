const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ✅ Import routes
const recommendationRoutes = require('./routes/recommendations');

// ✅ Mount routes
app.use('/api/recommend', recommendationRoutes);

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});