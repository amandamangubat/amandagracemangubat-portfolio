// src/components/LoginPopup.jsx
import React from "react";

export default function LoginPopup({ onClose, onSwitch, onLogin }) {
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

        <h2 className="text-center text-xl font-bold tracking-[0.15em] mb-6">
          SIGN IN
        </h2>

        {/* Email / Phone */}
        <div className="mb-5">
          <label className="text-xs font-medium block mb-1">
            Email or Phone Number
          </label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-gray-300 text-sm py-2 focus:outline-none focus:border-primary"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="text-xs font-medium block mb-1">Password</label>
          <input
            type="password"
            className="w-full bg-transparent border-b border-gray-300 text-sm py-2 focus:outline-none focus:border-primary"
          />
        </div>

        {/* Forgot password */}
        <button
          type="button"
          className="mt-3 mb-4 text-xs text-gray-700 hover:underline"
          onClick={() => onSwitch("forgot")}
        >
          Forgot Password?
        </button>

        {/* Log in button – now works */}
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
          onClick={onLogin}
        >
          Log In
        </button>

        {/* Create account */}
        <p className="text-[11px] text-center text-gray-800">
          Don&apos;t have an account yet?{" "}
          <button
            type="button"
            className="underline font-medium"
            onClick={() => onSwitch("signup")}
          >
            Create an account
          </button>
        </p>
      </div>
    </div>
  );
}
