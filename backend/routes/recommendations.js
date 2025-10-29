// server/routes/recommendations.js

const express = require('express');
const router = express.Router();

// Mock product data (replace with real DB queries)
const products = [
  { id: '1', name: 'Red Shirt', category: 'Clothing' },
  { id: '2', name: 'Blue Jeans', category: 'Clothing' },
  { id: '3', name: 'Sneakers', category: 'Footwear' },
  { id: '4', name: 'Boots', category: 'Footwear' },
  { id: '5', name: 'Hat', category: 'Accessories' }
];

// Helper functions
function getCategory(productId) {
  const product = products.find(p => p.id === productId);
  return product ? product.category : null;
}

function getProductsByCategory(category, excludeId) {
  return products.filter(p => p.category === category && p.id !== excludeId);
}

// Route: GET /recommend/:productId
router.get('/:productId', (req, res) => {
  const productId = req.params.productId;
  const category = getCategory(productId);

  if (!category) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const related = getProductsByCategory(category, productId);
  res.json(related);
});

module.exports = router;