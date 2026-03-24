// src/components/SignupPopup.jsx
import React from "react";

export default function SignupPopup({ onClose, onSwitch }) {
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
          backgroundImage: "url('/auth-bg.png')", // same background
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
          SIGN UP
        </h2>

        <p className="text-[11px] text-center text-gray-800 mb-5">
          Please fill in the information below:
        </p>

        {/* First Name */}
        <div className="mb-4">
          <label className="text-xs font-medium block mb-1">First Name</label>
          <input
            type="text"
            className="
              w-full bg-transparent border-b border-gray-300 text-sm py-2 
              focus:outline-none focus:border-primary
            "
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="text-xs font-medium block mb-1">Last Name</label>
          <input
            type="text"
            className="
              w-full bg-transparent border-b border-gray-300 text-sm py-2 
              focus:outline-none focus:border-primary
            "
          />
        </div>

        {/* Email */}
        <div className="mb-4">
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

        {/* Password */}
        <div className="mb-4">
          <label className="text-xs font-medium block mb-1">Password</label>
          <input
            type="password"
            className="
              w-full bg-transparent border-b border-gray-300 text-sm py-2 
              focus:outline-none focus:border-primary
            "
          />
        </div>

        {/* Terms */}
        <div className="flex items-start mb-4">
          <input type="checkbox" className="mt-1 mr-2" />
          <p className="text-[10px] text-gray-700 leading-snug">
            By continuing, I agree to Plug&amp;Play&apos;s{" "}
            <span className="underline cursor-pointer">Privacy Policy</span> and{" "}
            <span className="underline cursor-pointer">Terms of Use</span>.
          </p>
        </div>

        {/* Create account button */}
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
          Create My Account
        </button>

        {/* Already have account */}
        <p className="text-[11px] text-center text-gray-800">
          Already have an account?{" "}
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
