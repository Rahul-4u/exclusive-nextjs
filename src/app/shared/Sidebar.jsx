"use client";
import Link from "next/link";

export default function Sidebar({ userData }) {
  console.log("Sidebar userData:", userData);

  const userNav = {
    admin: [
      { name: "Admin Dashboard", path: "/dashboard/admin/overview" },
      { name: "Manage Users", path: "/dashboard/admin/users" },
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
      { name: "Add Product", path: "/dashboard/seller/products/add" },
      { name: "Orders", path: "/dashboard/seller/orders" },
      { name: "Sales Report", path: "/dashboard/seller/sales" },
      { name: "Profile Settings", path: "/dashboard/seller/profile" },
      { name: "Payment Info", path: "/dashboard/seller/payment" },
    ],
  };

  const navItems = userNav[userData?.role] || [];

  return (
    <aside className="w-64 min-h-screen bg-white shadow-md p-6 border-r border-gray-200 sticky top-0">
      <h2 className="text-xl font-bold mb-6 capitalize text-blue-700">
        {userData?.role} Panel
      </h2>
      <nav className="flex flex-col gap-3">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.path}
            className="block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
