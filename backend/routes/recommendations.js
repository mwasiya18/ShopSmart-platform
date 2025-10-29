const express = require('express');
const router = express.Router();

console.log('📦 Recommendations route loaded');

const products = [
  { id: '1', name: 'Laptop', category: 'Electronics' },
  { id: '2', name: 'Phone', category: 'Electronics' },
  { id: '3', name: 'Shoes', category: 'Footwear' },
  { id: '4', name: 'Sandals', category: 'Footwear' }
];

function getCategory(productId) {
  const product = products.find(p => p.id === productId);
  return product ? product.category : null;
}

function getProductsByCategory(category, excludeId) {
  return products.filter(p => p.category === category && p.id !== excludeId);
}

// ✅ Test route
router.get('/test', (req, res) => {
  console.log('✅ /test route was hit');
  res.send('✅ Recommendation route is working!');
});

// 🚀 Main route
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