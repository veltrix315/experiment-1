let cart = [];

function addToCart(movieName, moviePrice) {
    cart.push({ name: movieName, price: moviePrice });
    localStorage.setItem("cartItems", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  document.getElementById("cart-count").textContent = cartItems.length;
}

window.onload = updateCartCount;
