import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

import LoginPopup from "./components/LoginPopup.jsx";
import SignupPopup from "./components/SignupPopup.jsx";
import ForgotPasswordPopup from "./components/ForgotPasswordPopup.jsx";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import Cart from "./pages/Cart.jsx"; // <-- Imported
import Checkout from "./pages/Checkout.jsx";
import Account from "./pages/Account.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePopup, setActivePopup] = useState(null);

  // state
  const [cartItems, setCartItems] = useState([]);

  // add to cart
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // update qty
  const handleUpdateQuantity = (id, newQty) => {
    const qty = Math.max(1, Number(newQty) || 1);
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  // remove
  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // 👀 DEBUG: see cart in console
  console.log("App cartItems:", cartItems);

  return (
    <BrowserRouter>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setActivePopup={setActivePopup}
        cartCount={cartCount} // Use the pre-calculated cartCount
      />

      {/* AUTH POPUPS */}
      {activePopup === "login" && (
        <LoginPopup
          onClose={() => setActivePopup(null)}
          onSwitch={setActivePopup}
        />
      )}

      {activePopup === "signup" && (
        <SignupPopup
          onClose={() => setActivePopup(null)}
          onSwitch={setActivePopup}
        />
      )}

      {activePopup === "forgot" && (
        <ForgotPasswordPopup
          onClose={() => setActivePopup(null)}
          onSwitch={setActivePopup}
        />
      )}

      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />

        <Route
          path="/products"
          element={<Products onAddToCart={handleAddToCart} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetail onAddToCart={handleAddToCart} />}
        />

        {/* 🛒 NEW: Cart Route - Passes cart state and handlers */}
        <Route
          path="/cart"
          element={
            <Cart
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          }
        />

        {/* ✅ FIX: Consolidated Checkout Route */}
        <Route
          path="/checkout"
          element={
            <Checkout items={cartItems} onClearCart={() => setCartItems([])} />
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
