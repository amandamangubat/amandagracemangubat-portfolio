// src/pages/Checkout.jsx
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../api";

export default function Checkout({ items, onClearCart }) {
  const navigate = useNavigate();

  const taxRate = 0.12;

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [items]
  );

  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  const isEmpty = items.length === 0;

  // --- form state ---
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod"); // "cod" | "gcash" | "card"
  const [specialInstructions, setSpecialInstructions] = useState("");

  const [placingOrder, setPlacingOrder] = useState(false);
  const [orderError, setOrderError] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const formatCurrency = (value) =>
    `₱ ${value.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setOrderError(null);

    if (isEmpty) {
      setOrderError("Your cart is empty. Please add items before checkout.");
      return;
    }
    if (!fullName || !email || !phone || !addressLine1 || !city || !province) {
      setOrderError(
        "Please fill in all required fields (*) before placing your order."
      );
      return;
    }

    const orderPayload = {
      items: items.map((item) => ({
        productId: item.id,
        name: item.name,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
      })),
      totals: {
        subtotal,
        tax,
        total,
        currency: "PHP",
      },
      shipping: {
        fullName,
        email,
        phone,
        addressLine1,
        addressLine2,
        city,
        province,
        postal,
      },
      paymentMethod, // "cod" | "gcash" | "card"
      specialInstructions,
      createdAt: new Date().toISOString(),
    };

    try {
      setPlacingOrder(true);
      const result = await createOrder(orderPayload);

      setOrderSuccess(result?.message || "Your order was placed successfully!");

      if (onClearCart) onClearCart();
      setTimeout(() => {
        navigate("/"); // go back to home after success
      }, 2000);
    } catch (err) {
      console.error(err);
      setOrderError(err.message || "Failed to place order. Please try again.");
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <div className="min-h-screen cart-gradient pt-20 text-gray-900">
      {/* Breadcrumb */}
      <div className="px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 max-w-7xl mx-auto">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <i className="ri-arrow-right-s-line" />
          <Link to="/cart" className="hover:text-primary transition-colors">
            Cart
          </Link>
          <i className="ri-arrow-right-s-line" />
          <span className="text-gray-900 font-medium">Checkout</span>
        </div>
      </div>

      {/* Main content */}
      <div className="px-8 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handlePlaceOrder}
              className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-8"
            >
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold mb-1">
                  Checkout
                </h1>
                <p className="text-sm text-gray-600">
                  Enter your shipping details and payment method to complete
                  your order.
                </p>
              </div>

              {orderError && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                  {orderError}
                </div>
              )}

              {orderSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg px-4 py-3">
                  {orderSuccess}
                </div>
              )}

              {/* Shipping Details */}
              <section>
                <h2 className="text-lg font-semibold mb-4">Shipping Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="09XX-XXX-XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address Line 1<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      value={addressLine1}
                      onChange={(e) => setAddressLine1(e.target.value)}
                      placeholder="House/Unit, Building, Street"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      value={addressLine2}
                      onChange={(e) => setAddressLine2(e.target.value)}
                      placeholder="Barangay, Subdivision (optional)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City / Municipality<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Quezon City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Province<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      placeholder="Metro Manila"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      value={postal}
                      onChange={(e) => setPostal(e.target.value)}
                      placeholder="1100"
                    />
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section>
                <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`border rounded-xl px-4 py-3 flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === "cod"
                        ? "border-primary bg-primary/5"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <i className="ri-truck-line" />
                    <span>Cash on Delivery</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("gcash")}
                    className={`border rounded-xl px-4 py-3 flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === "gcash"
                        ? "border-primary bg-primary/5"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <i className="ri-wallet-3-line" />
                    <span>GCash</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`border rounded-xl px-4 py-3 flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === "card"
                        ? "border-primary bg-primary/5"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <i className="ri-bank-card-line" />
                    <span>Credit / Debit Card</span>
                  </button>
                </div>
              </section>

              {/* Notes */}
              <section>
                <h2 className="text-lg font-semibold mb-2">
                  Order Notes (Optional)
                </h2>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={3}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="Add delivery instructions or notes for the rider…"
                />
              </section>

              {/* Submit */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <Link
                  to="/cart"
                  className="text-sm text-gray-600 hover:text-primary flex items-center gap-1"
                >
                  <i className="ri-arrow-left-line" />
                  Back to Cart
                </Link>
                <button
                  type="submit"
                  disabled={placingOrder || isEmpty}
                  className={`px-6 py-3 rounded-button text-sm font-semibold flex items-center gap-2 transition-all ${
                    isEmpty || placingOrder
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-primary text-white hover:bg-opacity-90"
                  }`}
                >
                  {placingOrder ? (
                    <>
                      <i className="ri-loader-4-line animate-spin" />
                      Placing Order…
                    </>
                  ) : (
                    <>
                      <i className="ri-check-line" />
                      Place Order
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              {isEmpty ? (
                <p className="text-sm text-gray-600 mb-4">
                  Your cart is empty. Add items before checking out.
                </p>
              ) : (
                <>
                  <div className="space-y-3 mb-4 max-h-64 overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start justify-between text-sm"
                      >
                        <div className="flex-1 pr-2">
                          <p className="font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <p className="font-semibold text-gray-800">
                          {formatCurrency(item.unitPrice * item.quantity)}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">
                        {formatCurrency(subtotal)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (12%)</span>
                      <span className="font-medium">
                        {formatCurrency(isEmpty ? 0 : tax)}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                      <span className="font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-extrabold text-gray-900">
                        {formatCurrency(isEmpty ? 0 : total)}
                      </span>
                    </div>
                  </div>
                </>
              )}

              <p className="mt-4 text-[11px] text-gray-500">
                By placing your order, you agree to our{" "}
                <Link
                  to="/terms-of-service"
                  className="text-primary hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
