const API_BASE_URL = "http://localhost:2141"; // backend port

export async function getProducts() {
  const res = await fetch(`${API_BASE_URL}/api/products`);
  if (!res.ok) throw new Error("Failed to load products");
  return res.json();
}

export async function addToCart(productId, quantity = 1) {
  const res = await fetch(`${API_BASE_URL}/api/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, quantity }),
  });
  if (!res.ok) throw new Error("Failed to add to cart");
  return res.json();
}
