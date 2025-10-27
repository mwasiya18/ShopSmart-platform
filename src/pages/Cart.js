import React, { useEffect, useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
    setTotal(cart.reduce((sum, item) => sum + item.price, 0));
  }, []);

  return (
    <main className="centered">
      <div className="cart-box">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index}>
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
            </div>
          ))
        )}
        <h3>Total: ₹{total}</h3>
        <button>Proceed to Checkout</button>
      </div>
    </main>
  );
}

export default Cart;