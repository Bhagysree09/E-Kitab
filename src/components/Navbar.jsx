import React, { useState } from "react";
import ekitab from "../assets/ekitab.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-5 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-20">
        <img src={ekitab} alt="Logo" className="h-16 rounded-lg" />
        <h1 className="font-bold px-4 py-2">E-Kitab</h1>
      </div>

      {/* Navigation Links */}
      <div className="space-x-8 hidden md:flex items-center">
      <a href="/" className="text-[#5E23CF] hover:text-[#4A1C9D] font-semibold transition-colors duration-300">
          Home
        </a>
        {/* Dropdown for Tests */}
        <div className="relative">
          
          <button
            className="text-[#5E23CF] font-semibold hover:text-[#4A1C9D] transition-colors duration-300"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            Tests ▼
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Previous Year Test
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Mock Test
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Practice Test
              </a>
            </div>
          )}
        </div>

        {/* Other Menu Items */}
      
        <Link to="/courses" className="text-[#5E23CF] hover:text-[#4A1C9D] font-semibold transition-colors duration-300">
          Courses
        </Link>
        <Link to="/news" className="text-[#5E23CF] hover:text-[#4A1C9D] font-semibold transition-colors duration-300">
          Daily News
        </Link>
        <Link to="/exam-update" className="text-[#5E23CF] hover:text-[#4A1C9D] font-semibold transition-colors duration-300">
          Exam Updates
        </Link>
        <Link to="/plans" className="text-[#5E23CF] hover:text-[#4A1C9D] font-semibold transition-colors duration-300">
         Pricing
        </Link>
      </div>

      {/* Login/Sign In Buttons */}
      <div className="space-x-4">
      <Link to="/login">
        <button className="bg-[#5E23CF] text-white px-4 py-2 rounded-md border border-[#5E23CF] hover:bg-[#4A1C9D] transition">
         Login
        </button>
        </Link>
        <Link to="/signup">
        <button className="bg-[#5E23CF] text-white px-4 py-2 rounded-md border border-[#5E23CF] hover:bg-[#4A1C9D] transition">
          Sign Up
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
