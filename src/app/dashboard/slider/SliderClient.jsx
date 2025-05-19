"use client";
import React from "react";

export default function SliderClient({ userData }) {
  const userNav = {
    admin: [
      { name: "Admin Dashboard", path: "/dashboard/admin/overview" },
      { name: "Manage Users", path: "/dashboard/seller/overview" },
      { name: "Settings", path: "/dashboard/admin/settings" },
    ],
    customer: [
      { name: "Customer Dashboard", path: "/dashboard/customer/overview" },
      { name: "My Orders", path: "/dashboard/customer/orders" },
      { name: "Account Settings", path: "/dashboard/customer/settings" },
    ],
    seller: [
      { name: "Seller Dashboard", path: "/dashboard/seller/overview" },
      { name: "Product List", path: "/dashboard/seller/products" },
      { name: "Sales Report", path: "/dashboard/seller/sales" },
    ],
  };

  const navItems = userNav[userData?.role] || [];

  return (
    <aside className="w-64 min-h-screen bg-gray-100 shadow-md p-4">
      <h2 className="text-xl font-bold mb-4 capitalize text-blue-600">
        {userData.role} Panel
      </h2>
      <ul className="space-y-2">
        {navItems.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.path}
              className="block text-orange-600 bg-sky-600 px-4 py-2 rounded hover:bg-blue-100 transition-all"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
