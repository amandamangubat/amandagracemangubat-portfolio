import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#110b39] text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center mb-6">
        <img src="/PP-Logo.png" className="h-8" alt="PLUG&PLAY Logo" />

        <nav className="flex gap-10 text-sm">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/products" className="hover:text-primary">
            Products
          </Link>
          <Link to="/about-us" className="hover:text-primary">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex gap-6 text-xl">
          <i className="ri-facebook-fill"></i>
          <i className="ri-twitter-fill"></i>
          <i className="ri-instagram-line"></i>
        </div>
      </div>

      <div className="w-full border-t border-gray-700"></div>

      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center mt-4 text-sm text-gray-300">
        <p>© 2025 BSIS CIIT Philippines Inc.</p>

        <div className="flex gap-6">
          <Link
            to="/terms-of-service"
            className="hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>

          <Link
            to="/privacy-policy"
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
