import React from 'react';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 1999,
    image: '/product1.jpg',
    description: 'Immerse yourself in rich audio with noise cancellation and 20-hour battery life.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 2999,
    image: '/product2.jpg',
    description: 'Track your fitness, monitor heart rate, and receive notifications—all from your wrist.',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 1499,
    image: '/product3.jpg',
    description: 'Portable speaker with deep bass and crystal-clear sound. Perfect for parties and travel.',
  },
];

function Product() {
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <main className="centered">
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <p className="description">{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Product;