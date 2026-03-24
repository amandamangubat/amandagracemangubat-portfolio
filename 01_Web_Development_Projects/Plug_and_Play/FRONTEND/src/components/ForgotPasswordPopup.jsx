// src/components/ForgotPasswordPopup.jsx
import React from "react";

export default function ForgotPasswordPopup({ onClose, onSwitch }) {
  return (
    <div
      className="
        fixed
        z-[9999]
        top-[70px]
        right-6
        flex
        justify-end
        animate-fadeIn
      "
      style={{ pointerEvents: "none" }}
    >
      <div
        className="
          relative
          w-[320px]
          rounded-xl
          shadow-2xl
          px-8
          py-6
          text-gray-900
          bg-white/90
          bg-cover
          bg-center
        "
        style={{
          pointerEvents: "auto",
          backgroundImage: "url('/auth-bg.png')",
        }}
      >
        {/* X button */}
        <button
          onClick={() => onClose()}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <i className="ri-close-line text-2xl" />
        </button>

        {/* Title */}
        <h2 className="text-center text-xl font-bold tracking-[0.15em] mb-3">
          FORGOT PASSWORD
        </h2>

        <p className="text-[11px] text-center text-gray-800 mb-5">
          Enter your email address below and we&apos;ll send you a link to reset
          your password.
        </p>

        {/* Email */}
        <div className="mb-6">
          <label className="text-xs font-medium block mb-1">
            Email Address
          </label>
          <input
            type="email"
            className="
              w-full bg-transparent border-b border-gray-300 text-sm py-2 
              focus:outline-none focus:border-primary
            "
          />
        </div>

        {/* Send reset link */}
        <button
          type="button"
          className="
            w-full 
            bg-[#110b39] 
            text-white 
            py-2 
            rounded-full 
            text-sm 
            font-semibold 
            hover:bg-[#1c1555] 
            transition-colors 
            mb-4
          "
        >
          Send Reset Link
        </button>

        {/* Back to login */}
        <p className="text-[11px] text-center text-gray-800">
          Remember your password?{" "}
          <button
            type="button"
            className="underline font-medium"
            onClick={() => onSwitch("login")}
          >
            Login Here
          </button>
        </p>
      </div>
    </div>
  );
}
