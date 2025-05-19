"use client";

import { FcGoogle } from "react-icons/fc";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Register
        </h2>

        <RegisterForm/>

        <div className="flex items-center justify-between my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-100 transition"
        >
          <FcGoogle size={24} />
          Sign up with Google
        </button>
      </div>
    </div>
  );
}
