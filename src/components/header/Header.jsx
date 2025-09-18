import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-gray-950 shadow-sm p-5 flex justify-between items-center">
      {/* Left Logo */}
      <div className="flex items-center space-x-2">
        <a className="text-2xl text-blue-500 font-bold">Action</a>
        <a className="text-2xl text-amber-500 font-bold">Gallery</a>
      </div>

      {/* Center Menu (Hidden on small, visible on md+) */}
      <div className="hidden md:flex space-x-6 text-white">
        <a href="#">Home</a>
        <a href="#">Actions</a>
        <a href="#">Categories</a>
        <a href="#">How to work</a>
      </div>

      {/* Hamburger (Visible on small, hidden on md+) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {/* Icon changes when open */}
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Right Side (Cart + Avatar) */}
      <div className="flex items-center space-x-5">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle text-white"
        >
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 
                   5M7 13l-2.293 2.293c-.63.63-.184 
                   1.707.707 1.707H17m0 
                   0a2 2 0 100 4 2 2 0 000-4zm-8 
                   2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="badge badge-sm indicator-item">8</span>
          </div>
        </div>

        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://i.ibb.co/nG22H31/Whats-App-Image-2025-09-18-at-2-44-32-AM.jpg"
            />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col space-y-4 p-5 md:hidden z-50">
          <a href="#">Home</a>
          <a href="#">Actions</a>
          <a href="#">Categories</a>
          <a href="#">How to work</a>
        </div>
      )}
    </div>
  );
};

export default Header;
