// src/pages/Cart.jsx
import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cart({ items, onUpdateQuantity, onRemoveItem }) {
  const navigate = useNavigate();
  const taxRate = 0.12;

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [items]
  );

  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const formatCurrency = (value) =>
    `₱ ${value.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;

  const isEmpty = items.length === 0;

  const handleQuantityChange = (id, newQty) => {
    const qty = Math.max(1, Number(newQty) || 1);
    onUpdateQuantity(id, qty);
  };

  const handleIncrease = (id, currentQty) => {
    onUpdateQuantity(id, currentQty + 1);
  };

  const handleDecrease = (id, currentQty) => {
    if (currentQty > 1) {
      onUpdateQuantity(id, currentQty - 1);
    }
  };

  return (
    <div className="cart-gradient min-h-screen text-gray-900 pt-20">
      {/* Breadcrumb */}
      <div className="px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <i className="ri-arrow-right-s-line" />
          <Link to="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <i className="ri-arrow-right-s-line" />
          <span className="text-gray-900 font-medium">Shopping Cart</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* (Optional) Debug text – helps you see if App → Cart is connected */}
          {/* <p className="text-xs text-gray-500 mb-2">
            Cart items received from App: <b>{items.length}</b>
          </p> */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                      My Cart
                    </h1>
                    {!isEmpty && (
                      <p className="text-sm text-gray-500 mt-1">
                        You have{" "}
                        <span className="font-semibold">{items.length}</span>{" "}
                        {items.length === 1 ? "item" : "items"} in your cart.
                      </p>
                    )}
                  </div>
                  <Link
                    to="/products"
                    className="text-primary hover:text-primary/80 transition-colors flex items-center space-x-2 text-sm font-medium"
                  >
                    <i className="ri-arrow-left-line" />
                    <span>Continue Shopping</span>
                  </Link>
                </div>

                {/* EMPTY CART STATE */}
                {isEmpty ? (
                  <div className="py-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <i className="ri-shopping-cart-line text-2xl text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">
                      Your cart is empty
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm">
                      Looks like you haven&apos;t added anything yet. Browse our
                      products to get started.
                    </p>
                    <Link
                      to="/products"
                      className="inline-block bg-primary text-white px-6 py-2.5 rounded-button font-semibold hover:bg-opacity-90 transition-all text-sm"
                    >
                      Browse Products
                    </Link>
                  </div>
                ) : (
                  items.map((item, index) => (
                    <div
                      key={item.id}
                      className={`pb-6 ${
                        index !== items.length - 1
                          ? "mb-6 border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover object-top rounded bg-gray-100"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                {item.name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </div>
                            <button
                              type="button"
                              className="text-gray-400 hover:text-red-500 transition-colors"
                              onClick={() => onRemoveItem(item.id)}
                              aria-label="Remove item"
                            >
                              <i className="ri-close-line text-xl" />
                            </button>
                          </div>

                          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            {/* Quantity */}
                            <div className="flex items-center space-x-3">
                              <span className="text-sm text-gray-600">
                                Quantity
                              </span>
                              <div className="flex items-center border border-gray-300 rounded-button">
                                <button
                                  type="button"
                                  className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                  onClick={() =>
                                    handleDecrease(item.id, item.quantity)
                                  }
                                >
                                  <i className="ri-subtract-line text-sm" />
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  className="quantity-input w-12 text-center border-none focus:outline-none text-sm"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleQuantityChange(
                                      item.id,
                                      e.target.value
                                    )
                                  }
                                />
                                <button
                                  type="button"
                                  className="px-3 py-1 hover:bg-gray-100 transition-colors"
                                  onClick={() =>
                                    handleIncrease(item.id, item.quantity)
                                  }
                                >
                                  <i className="ri-add-line text-sm" />
                                </button>
                              </div>
                            </div>

                            {/* Price */}
                            <div className="text-right sm:text-left">
                              <p className="text-xs text-gray-500">Price</p>
                              <p className="text-sm text-gray-700">
                                {formatCurrency(item.unitPrice)} each
                              </p>
                              <p className="text-base font-bold text-gray-900 mt-1">
                                {formatCurrency(item.unitPrice * item.quantity)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-28">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">
                      {formatCurrency(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600 font-medium">
                      {isEmpty ? "—" : "Free"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tax (12%)</span>
                    <span className="font-semibold">
                      {formatCurrency(isEmpty ? 0 : tax)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatCurrency(isEmpty ? 0 : total)}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  disabled={isEmpty}
                  onClick={() => {
                    if (!isEmpty) {
                      // later: navigate("/checkout")
                      navigate("/checkout");
                    }
                  }}
                  className={`w-full py-3 rounded-button font-bold text-lg transition-all ${
                    isEmpty
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-primary text-white hover:bg-opacity-90"
                  }`}
                >
                  {isEmpty ? "Add items to checkout" : "Proceed to Checkout"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
