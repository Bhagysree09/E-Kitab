import React from "react";
import ssc from "../assets/ssc.jpg";
import railway from "../assets/railway.png";
import ias from "../assets/ias.jpg";

const courses = [
  {
    title: "SSC Exam Preparation",
    description: "Comprehensive SSC exam preparation courses with expert guidance.",
    image: ssc, // ✅ Corrected: Removed extra {}
  },
  {
    title: "Government Exams Coaching",
    description: "Ace government exams with structured courses and mock tests.",
    image: ias, // ✅ Corrected: Removed extra {}
  },
  {
    title: "Banking & Railways Exams",
    description: "Specialized coaching for Banking and Railway recruitment exams.",
    image: railway, // ✅ Corrected: Removed extra {}
  },
];

const Courses = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Our Courses</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img src={course.image} alt={course.title} className="w-32 h-32 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">{course.title}</h3>
            <p className="text-gray-600 mt-2">{course.description}</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
