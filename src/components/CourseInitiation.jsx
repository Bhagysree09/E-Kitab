import React from "react";

const CourseInitiation = () => {
  return (
    <div className="bg-purple-50 h-[80vh] flex items-center justify-center p-10 relative">
      <div className="absolute inset-0 bg-purple-400 opacity-30" style={{ backgroundImage: "url('/path-to-pattern.png')", backgroundSize: "cover" }}></div>
      
      <div className="relative flex max-w-6xl w-full">
        {/* Left side content */}
        <div className="w-1/2 pr-10">
          <h2 className="text-4xl font-bold text-black">Course Initiation Process</h2>
          <p className="text-gray-700 mt-4">
            Design is very creative work. Creative work requires skill. And skill comes through
            regular practice and guidance from experts. At E-learning, it is possible to get
            guidance from experts as well as ideas about projects to practice.
          </p>
          <button className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
            Browse Course
          </button>
          {/* Link Section */}
          <div className="mt-4">
            <a href="#" className="text-purple-600 underline">Learn More</a>
          </div>
        </div>
        
        {/* Right side steps */}
        <div className="w-1/2 grid grid-cols-2 gap-4">
          <div className="bg-white shadow-lg p-4 rounded-lg text-center border border-purple-300">
            <div className="text-4xl text-purple-600">👤</div>
            <h3 className="text-lg font-semibold text-black mt-2">Create account</h3>
            <p className="text-gray-600 mt-1 text-sm">Take your career to unique heights in this competitive field.</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg text-center border border-purple-300">
            <div className="text-4xl text-purple-600">📚</div>
            <h3 className="text-lg font-semibold text-black mt-2">Select the course</h3>
            <p className="text-gray-600 mt-1 text-sm">Take your career to unique heights in this competitive field.</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg text-center border border-purple-300">
            <div className="text-4xl text-purple-600">💳</div>
            <h3 className="text-lg font-semibold text-black mt-2">Buy the course</h3>
            <p className="text-gray-600 mt-1 text-sm">Take your career to unique heights in this competitive field.</p>
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg text-center border border-purple-300">
            <div className="text-4xl text-purple-600">🎯</div>
            <h3 className="text-lg font-semibold text-black mt-2">Start acquiring skills</h3>
            <p className="text-gray-600 mt-1 text-sm">Take your career to unique heights in this competitive field.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInitiation;
