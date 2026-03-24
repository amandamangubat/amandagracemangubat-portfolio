// src/components/NavBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({
  isLoggedIn,
  setIsLoggedIn,
  setActivePopup,
  cartCount,
}) {
  // local state just for the account dropdown when logged in
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      // if not logged in → open login popup
      setActivePopup("login");
    } else {
      // if logged in → toggle dropdown
      setShowAccountDropdown((prev) => !prev);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowAccountDropdown(false);
  };

  return (
    <nav
      style={{ backgroundColor: "#110b39" }}
      className="text-white px-8 py-4 fixed w-full top-0 z-50"
    >
      <div className="flex items-center justify-between">
        <img src="/PP-Logo.png" alt="PLUG&PLAY Logo" className="h-8 ml-6" />

        {/* Links */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <Link to="/about-us" className="hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Right side: search, cart, account */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-gray-800 text-white px-4 py-2 pr-10 rounded-button border-none text-sm"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
              <i className="ri-search-line text-gray-400"></i>
            </div>
          </div>

          {/* Cart */}
          <div className="w-8 h-8 flex items-center justify-center relative">
            <Link to="/cart" className="your-cart-class-here">
              <i className="ri-shopping-cart-line" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-semibold rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Account */}
          <div
            className="relative w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={handleProfileClick}
          >
            <i className="ri-user-line text-xl hover:text-primary transition-colors"></i>

            {/* Only show dropdown if logged in AND toggled */}
            {isLoggedIn && (
              <div
                className={`account-dropdown ${
                  showAccountDropdown ? "show" : ""
                }`}
              >
                <div className="account-dropdown-header">
                  <h3>ACCOUNT</h3>
                </div>
                <div className="account-dropdown-menu">
                  <Link
                    to="/account"
                    className="account-dropdown-item flex items-center"
                  >
                    <i className="ri-user-line mr-3"></i>Profile
                  </Link>

                  <Link
                    to="/account"
                    className="account-dropdown-item flex items-center"
                  >
                    <i className="ri-shopping-bag-line mr-3"></i>Orders
                  </Link>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="account-dropdown-item flex items-center"
                  >
                    <i className="ri-logout-box-line mr-3"></i>Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
