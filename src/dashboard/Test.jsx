import React from "react";
import { useState } from 'react';

const Test = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleLogout = () => {
   localStorage.removeItem("auth");
   navigate("/");
 };
 const email = localStorage.getItem("email") || null;
  return (
    <div className="w-full min-h-screen bg-gray-100 p-6">
      {/* ✅ Navbar */} 
      <nav className="bg-white shadow-lg p-4 flex justify-between items-center rounded-lg mb-6">
        <div className="text-2xl font-extrabold text-purple-600">EKitab</div>
        <div className="flex space-x-6">
          <a href="/test" className="text-gray-700 hover:text-purple-600 font-semibold transition">
            Tests
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600 font-semibold transition">
            Courses
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600 font-semibold transition">
            Daily News
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600 font-semibold transition">
            Exam Updates
          </a>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <div
            className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center text-lg font-semibold cursor-pointer hover:bg-purple-600 transition"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {email ? email.charAt(0).toUpperCase() : "L"}
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-10">
              <ul className="py-2">
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer" onClick={() => navigate("/profile")}>
                  Profile
                </li>
                <li className="px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer" onClick={() => navigate("/settings")}>
                  Settings
                </li>
                <li
                   className="px-4 py-2 text-red-500 hover:bg-gray-200 cursor-pointer"                  onClick={handleLogout}
               >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Search Bar */}
      <div className="mt-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for Exam ......."
          className="w-2/3 p-3 border rounded-full focus:outline-none shadow-sm"
        />
      </div>

      {/* Explore Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Explore all Exams</h2>

        <div className="mt-4 flex bg-white p-4 rounded-lg shadow-md">
          {/* Sidebar - Scrollable */}
          <div className="w-1/4 border-r p-3 overflow-y-auto max-h-[400px]">
            {[
              "SSC Exams",
              "Banking Exam",
              "Teaching Exams",
              "Railway Exams",
              "State gov Exams",
              "Police Exams",
              "Engineering Exams",
              "Medical Exams",
              "Defence Exams",
            ].map((exam, index) => (
              <div
                key={index}
                className={`flex items-center p-3 rounded-md cursor-pointer ${
                  index === 0 ? "bg-purple-200 text-purple-900 font-semibold" : "hover:bg-gray-200"
                }`}
              >
                <span className="bg-gray-300 text-gray-700 px-2 py-1 rounded mr-2 text-sm">img</span>
                {exam}
              </div>
            ))}
          </div>

          {/* Exam Cards */}
          <div className="w-3/4 p-3 bg-purple-100">
            <div className="grid grid-cols-3 gap-4">
              {Array(9).fill("SSC CGL 116 test").map((exam, index) => (
                <div key={index} className="w-40 p-3 bg-white shadow-md rounded-md flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{exam.split(" ")[0]}</p>
                    <p className="text-sm text-gray-500">{exam.split(" ").slice(1).join(" ")}</p>
                  </div>
                  <button className="bg-gray-300 w-6 h-6 rounded-full"></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
