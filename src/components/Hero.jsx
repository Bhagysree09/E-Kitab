import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import studyIllustration from "../assets/woman.png";
import book from "../assets/book.png";
import Course from './Course';
import Exam from "./Exam";
import SeminarSection from "./SeminarSection";
import Services from './Services';
import { FaUserGraduate, FaUsers, FaBookOpen, FaAward } from "react-icons/fa";
import CourseInitiation from "./CourseInitiation";
import Feedback from './Feedback';
import Footer from './Footer';
import CountUp from "react-countup";
const Hero = () => {
  return (
    <div className="bg-purple-50 min-h-screen flex flex-col items-center justify-center px-6 relative">
      
      {/* Sticky Navbar */}
      <div className="w-full fixed top-0 left-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center mt-24 max-w-6xl w-full"> 
        {/* Left Content */}
        <div className="md:w-1/2 text-left">
          <p className="text-sm text-gray-500 uppercase">100% Quality Courses</p>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mt-2">
            Find Your <span className="text-purple-600">Perfect</span> Courses
            <br /> And Improve Your <span className="bg-yellow-300 px-2 rounded">Skills</span>
          </h1>
          <p className="text-gray-700 text-lg mt-4">
            We Have <span className="font-bold">40K+</span> Online Courses & <span className="font-bold">500K+</span> Online Registered Students.
          </p>
          <div className="mt-6">
            <Link to="/courses">
              <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center">
                Explore All Courses <span className="ml-2">→</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          <img
            src={studyIllustration}
            alt="Student Studying"
            className="w-full max-w-md rounded-lg shadow-lg relative z-10"
          />

          {/* Badge: 100% Satisfied Students */}
          <div className="absolute top-[-40px] left-[-40px] bg-white p-2 rounded-lg shadow-md flex items-center">
            <img src={studyIllustration} alt="Satisfied Students" className="w-10 h-10 rounded-full mr-2" />
            <div>
              <p className="text-sm font-semibold">100% Satisfied Students</p>
            </div>
            <span className="ml-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs">4+</span>
          </div>

          {/* Badge: 25K+ Courses */}
          <div className="absolute bottom-[-30px] right-[-30px] bg-white p-2 rounded-lg shadow-md flex items-center">
            <span className="bg-pink-500 text-white p-2 rounded-full text-lg">📚</span>
            <p className="ml-2 text-sm font-semibold">25K+ Courses</p>
          </div>
        </div>
      </section>
      <div className="mt-20 relative z-10">
        <Course />
      </div>
      <div className="mt-10 relative z-10">
        <Exam />
      </div>
      <div className="mt-10 relative z-10">
        <SeminarSection />
      </div>
      <div className="mt-10 relative z-10">
        <Services />
      </div>
      <div className="mt-10 relative z-10">
        <CourseInitiation />
      </div>
      <div className="w-full mt-10 bg-gradient-to-r from-black via-purple-900 to-black py-16 text-white text-center">
      <div className="max-w-none mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 px-10">
        {/* Mentor Count */}
        <div className="flex flex-col items-center">
          <FaUserGraduate className="text-orange-400 text-5xl mb-2" />
          <h2 className="text-3xl font-bold">
            <CountUp start={0} end={555} duration={4.5} separator="," />
            +
          </h2>
          <p className="text-lg">Our Mentor</p>
        </div>

        {/* Students Count */}
        <div className="flex flex-col items-center">
          <FaUsers className="text-orange-400 text-5xl mb-2" />
          <h2 className="text-3xl font-bold">
            <CountUp start={0} end={99000} duration={4.5} separator="," />
            +
          </h2>
          <p className="text-lg">All Students</p>
        </div>

        {/* Courses Count */}
        <div className="flex flex-col items-center">
          <FaBookOpen className="text-orange-400 text-5xl mb-2" />
          <h2 className="text-3xl font-bold">
            <CountUp start={0} end={250} duration={4.5} separator="," />
            +
          </h2>
          <p className="text-lg">All Courses</p>
        </div>

        {/* Awards Count */}
        <div className="flex flex-col items-center">
          <FaAward className="text-orange-400 text-5xl mb-2" />
          <h2 className="text-3xl font-bold">
            <CountUp start={0} end={66} duration={4.5} separator="," />
            +
          </h2>
          <p className="text-lg">Winning Awards</p>
        </div>
      </div>
    </div>
    <div className="mt-10 relative z-10">
        <Feedback />
      </div>
      <div className="bg-white text-black py-8 px-4 mt-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">
            Stay connected with E-learning to keep yourself updated
          </h2>
          <p className="mb-6">
            Enter your email below to subscribe to our newsletter and get updates!
          </p>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 mb-2 sm:mb-0 w-full sm:w-auto text-black rounded-md border border-gray-300 focus:outline-none"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
