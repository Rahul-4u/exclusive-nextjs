"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search, ShoppingCart, Heart } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import LogIn from "../register/components/LogIn";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  const isLoggedIn = !!session?.user;

  

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Exclusive
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-medium hover:text-blue-600 transition ${
                pathname === link.path
                  ? "text-blue-600 underline"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              size={16}
            />
          </div>

          {/* Cart & Wishlist */}
          <Link href="/cart">
            <ShoppingCart className="text-gray-700 hover:text-blue-600 cursor-pointer" />
          </Link>
          <Link href="/wishlist">
            <Heart className="text-gray-700 hover:text-blue-600 cursor-pointer" />
          </Link>

          {/* Auth Info */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <img
                src={session.user.image || "/default-avatar.png"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full border"
              />
              

              <button
                onClick={() => signOut()}
                className="text-sm text-red-600 hover:underline ml-2 cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <LogIn />
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`block text-sm font-medium ${
                pathname === link.path
                  ? "text-blue-600 underline"
                  : "text-gray-700"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Search bar */}
          <div className="relative mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              size={18}
            />
          </div>

          {/* Icons */}
          <div className="flex space-x-4 pt-2">
            <Link href="/cart">
              <ShoppingCart className="text-gray-700 hover:text-blue-600 cursor-pointer" />
            </Link>
            <Link href="/wishlist">
              <Heart className="text-gray-700 hover:text-blue-600 cursor-pointer" />
            </Link>
          </div>

          {/* Auth Info */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-3 pt-4">
              <Image
                src={session.user.image || "/default-avatar.png"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full border"
              />
              <span className="text-sm font-medium text-blue-600">
                {session.user.name}
              </span>
              <button
                onClick={() => signOut()}
                className="text-sm text-red-600 hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <LogIn />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
