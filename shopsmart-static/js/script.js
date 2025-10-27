function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsDiv = document.getElementById('cartItems');
  const totalPriceEl = document.getElementById('totalPrice');

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceEl.textContent = "";
    return;
  }

  let total = 0;
  cartItemsDiv.innerHTML = "";
  cart.forEach((item) => {
    total += item.price;
    cartItemsDiv.innerHTML += `
      <div style="margin-bottom: 1rem; border-bottom: 1px solid #ccc; padding-bottom: 1rem;">
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price}</p>
      </div>
    `;
  });

  totalPriceEl.textContent = `Total: ₹${total}`;
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

if (window.location.pathname.includes("cart.html")) {
  window.onload = loadCart;
}