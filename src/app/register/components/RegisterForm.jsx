"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function RegisterForm() {
  const [message, setMessage] = useState("");

  const handleSubmite = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;
    const role = form.role.value;

    // Step 1: Register user
    const response = await registerUser({ name, email, password, image, role });

    if (response.success) {
      setMessage("Registration successful! Logging in...");

      // Step 2: Auto sign in with credentials provider
      const result = await signIn("credentials", {
        redirect: true,
        callbackUrl: "/",
        email,
        password,
      });

      form.reset();
    } else {
      setMessage(` ${response.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmite} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <select
          name="role"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select Role</option>
          <option value="customer">Customer</option>
          <option value="seller">Seller</option>
        </select>

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
}
