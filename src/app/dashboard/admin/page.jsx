"use client";

import { useSession } from "next-auth/react";


export default function AdminDashboardPage() {
  const { data: session, status } = useSession();

 

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome, {session.user.email}</p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600">1,245</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-700">Orders</h2>
          <p className="text-3xl font-bold text-green-600">532</p>
        </div>

        <div className="bg-white shadow rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-700">Revenue</h2>
          <p className="text-3xl font-bold text-purple-600">$12,430</p>
        </div>
      </section>

      {/* Welcome Box */}
      <section className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Admin Actions
        </h2>
        <p className="text-gray-600 mb-2">
          Manage your platform from here. You can view stats, manage users and
          more.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>📋 View user list</li>
          <li>📦 Manage product listings</li>
          <li>📈 Monitor sales</li>
          <li>⚙️ Update platform settings</li>
        </ul>
      </section>
    </div>
  );
}
