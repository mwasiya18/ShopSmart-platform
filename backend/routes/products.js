const express = require('express');
const router = express.Router();
let products = require('../data/products.json');

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// POST new product
router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const newProduct = {
    id: Date.now(),
    name,
    price: parseInt(price)
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;