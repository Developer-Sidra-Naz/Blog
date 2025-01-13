'use client'
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-xl">My Blogs</h1>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="sm:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-blue-900 sm:static sm:block sm:w-auto`}
          >
            <ul className="flex flex-col sm:flex-row sm:space-x-6 text-center">
              <li className="text-white hover:text-gray-300 py-2 sm:py-0">
                <Link href="/">Home</Link>
              </li>
              <li className="text-white hover:text-gray-300 py-2 sm:py-0">
                <Link href="/about">About</Link>
              </li>
        
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
