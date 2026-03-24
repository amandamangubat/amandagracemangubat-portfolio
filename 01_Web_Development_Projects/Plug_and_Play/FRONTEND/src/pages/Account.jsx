// src/pages/Account.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Account() {
  const [activeTab, setActiveTab] = useState("profile"); // "profile" | "orders"

  // Dummy data – replace with real data later
  const user = {
    name: "Grace Mangubat",
    email: "grace@hahaha.com",
    addresses: [
      {
        name: "Home",
        line: "123 Sampaloc St. Sta. Mesa, Manila",
        phone: "+123 456 7890",
        zip: "1008",
      },
      {
        name: "Office",
        line: "Unit 123, Sample Building, Quezon City",
        phone: "+123 456 7890",
        zip: "1100",
      },
    ],
  };

  const orders = [
    {
      id: "ORD-2025-0001",
      productName: "Name of the product",
      category: "Category",
      quantity: 1,
      status: "Completed",
      total: 0,
    },
    {
      id: "ORD-2025-0002",
      productName: "Name of the product",
      category: "Category",
      quantity: 1,
      status: "Completed",
      total: 0,
    },
    {
      id: "ORD-2025-0003",
      productName: "Name of the product",
      category: "Category",
      quantity: 1,
      status: "To Receive",
      total: 0,
    },
  ];

  return (
    <div className="min-h-screen pt-24 account-gradient text-gray-900">
      {/* Top banner */}
      <div className="px-8">
        <div
          className="
            max-w-6xl mx-auto 
            rounded-2xl 
            overflow-hidden 
            shadow-lg 
            mb-8 
            relative
          "
        >
          <img
            src="/account-banner.png" // 🟣 put your monster header image here
            alt="Welcome banner"
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 flex items-end">
            <div className="px-8 pb-4">
              <h1 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow">
                WELCOME, USER!
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="px-8 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white/80 rounded-2xl shadow-sm p-4 space-y-2">
              <SidebarItem
                label="Profile"
                active={activeTab === "profile"}
                onClick={() => setActiveTab("profile")}
              />
              <SidebarItem
                label="Orders"
                active={activeTab === "orders"}
                onClick={() => setActiveTab("orders")}
              />
              <SidebarItem
                label="Logout"
                active={false}
                onClick={() => {
                  // TODO: hook to your logout logic
                  window.location.href = "/";
                }}
              />
            </div>
          </aside>

          {/* Content */}
          <section className="md:col-span-3 bg-white/90 rounded-2xl shadow-sm p-8">
            {activeTab === "profile" ? (
              <ProfileTab user={user} />
            ) : (
              <OrdersTab orders={orders} />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Helper components ---------------- */

function SidebarItem({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-full text-left 
        transition-all
        ${active ? "bg-[#f28eff] text-white" : "bg-transparent text-gray-800"}
      `}
    >
      <span className={`text-lg ${active ? "text-white" : "text-[#7b5cff]"}`}>
        <i className="ri-star-fill" />
      </span>
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}

function ProfileTab({ user }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left: Info */}
      <div className="flex-1">
        <h2 className="text-2xl font-extrabold mb-6 tracking-wide">
          PERSONAL INFORMATION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
          {/* Name */}
          <div>
            <p className="text-xs font-semibold tracking-wide mb-1">NAME</p>
            <p className="border-b border-gray-400 pb-1 text-sm">{user.name}</p>
          </div>

          {/* Email */}
          <div>
            <p className="text-xs font-semibold tracking-wide mb-1">EMAIL</p>
            <p className="border-b border-gray-400 pb-1 text-sm">
              {user.email}
            </p>
          </div>

          {/* Change password */}
          <div>
            <p className="text-xs font-semibold tracking-wide mb-1">
              CHANGE PASSWORD
            </p>
            <p className="border-b border-gray-400 pb-1 text-sm">
              ***************
            </p>
          </div>

          {/* Confirm password */}
          <div>
            <p className="text-xs font-semibold tracking-wide mb-1">
              CONFIRM PASSWORD
            </p>
            <p className="border-b border-gray-400 pb-1 text-sm">
              ***************
            </p>
          </div>
        </div>

        {/* Saved addresses */}
        <div className="mb-4">
          <p className="text-xs font-semibold tracking-wide mb-2">
            SAVED ADDRESSES
          </p>
          <button className="mb-3 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-400 text-xs font-semibold hover:bg-gray-100 transition-colors">
            Add New Address <span className="text-lg leading-none">+</span>
          </button>

          <div className="space-y-3">
            {user.addresses.map((addr, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300 pb-2 text-sm"
              >
                <div className="space-y-1">
                  <p className="font-semibold">{addr.name}</p>
                  <p>{addr.line}</p>
                  <p>{addr.phone}</p>
                </div>
                <div className="mt-2 md:mt-0 text-xs text-gray-600 md:text-right">
                  <p>Zip Code</p>
                  <p>{addr.zip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Avatar */}
      <div className="flex flex-col items-center lg:w-64">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
          <img
            src="/profile-picture.png" // 🟣 put your plushie profile photo here
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="px-4 py-2 rounded-full border border-gray-400 text-xs font-semibold hover:bg-gray-100 transition-colors">
          Change Profile Picture
        </button>
      </div>
    </div>
  );
}

function OrdersTab({ orders }) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold mb-6 tracking-wide">
        MY PURCHASES
      </h2>

      <div className="space-y-6">
        {orders.map((order, idx) => (
          <div
            key={order.id}
            className={`pb-4 ${
              idx < orders.length - 1 ? "border-b border-gray-300" : ""
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              {/* Left: product info */}
              <div>
                <p className="text-sm font-semibold mb-1">
                  {order.productName}
                </p>
                <p className="text-xs text-gray-600">Category</p>
                <p className="text-xs text-gray-600 mb-1">
                  Quantity: {order.quantity}
                </p>
                <p className="text-[11px] text-gray-500">
                  Order ID: {order.id}
                </p>
              </div>

              {/* Right: status + actions */}
              <div className="flex flex-col items-end gap-2">
                <p className="text-xs text-gray-700">
                  <span className="font-semibold">{order.status}</span> &nbsp;
                  Php {order.total.toFixed(2)}
                </p>
                <div className="flex gap-2">
                  <Link
                    to="/products"
                    className="px-4 py-1.5 rounded-full border border-gray-400 text-xs font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Buy it again
                  </Link>
                  <button className="px-4 py-1.5 rounded-full border border-gray-400 text-xs font-semibold hover:bg-gray-100 transition-colors">
                    Order Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {orders.length === 0 && (
          <p className="text-sm text-gray-600">
            You haven&apos;t purchased anything yet.
          </p>
        )}
      </div>
    </div>
  );
}
