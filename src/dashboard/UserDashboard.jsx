
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import targetImage from '../assets/target 1.png';
import { useNavigate } from "react-router-dom";
const UserDashboard = () => {
  const [userName, setUserName] = useState("User");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const mockExams = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    title: `Test Title ${index + 1}`,
    description: "Description description",
  }));

  const [visibleExams, setVisibleExams] = useState(6);

  const handleShowMore = () => {
    navigate('/test'); // Replace '/test' with your actual route
  };

  useEffect(() => {
    const name = localStorage.getItem("userName") || "User";
    setUserName(name);
  }, []);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  const heroSlides = ["Slide 1", "Slide 2", "Slide 3"];
  const courses = Array.from({ length: 5 }, (_, i) => `Course Title ${i + 1}`);
  const email = localStorage.getItem("email") || null;
  const firstName = email?.split("@")[0] || "User";

  // Hero slider settings
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Courses slider settings
  const courseSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 relative">
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

      {/* ✅ Hero Slider (with Welcome Message) */}
      <section className="mb-6 mt-8">
        <Slider {...heroSliderSettings}>
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="h-64 bg-gradient-to-r from-purple-500 to-purple-700 text-white flex items-center justify-center relative rounded-lg overflow-hidden shadow-xl"
            >
              <div className="text-center">
                <h2 className="text-4xl font-extrabold mb-2">{slide}</h2>
                <p className="text-lg">Discover your learning journey 🚀</p>
              </div>

              {/* ✅ Welcome Message Inside Slider */}
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-purple-900 px-6 py-3 rounded-xl shadow-xl text-xl font-bold animate-fadeIn">
                  🎉 Welcome, <span className="text-purple-900">{firstName}</span>! 😊🔥
                </div>
              )}
            </div>
          ))}
        </Slider>
      </section>

      {/* ✅ Explore Courses Section with Slider */}
      {/* ✅ Explore Courses Section with Slider */}
<section className="mb-6">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-3xl font-bold text-gray-800">🔥 Explore Courses</h2>
    <button className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition shadow-lg">
      🚀 Subscribe
    </button>
  </div>

  <Slider {...courseSliderSettings}>
    {courses.map((course, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-4 mx-2 hover:shadow-lg transition border border-gray-200"
      >
        <div className="bg-purple-200 h-16 w-full rounded-lg"></div>
        <p className="mt-3 font-semibold text-lg">{course}</p>
        <p className="text-sm text-gray-500">Short description of the course.</p>
        {/* ✅ Subscribe Button inside Course Card */}
        <button className="mt-3 bg-purple-500 text-white w-full py-2 rounded-lg hover:bg-purple-600 transition">
          Subscribe
        </button>
      </div>
    ))}
  </Slider>
</section>

      {/* ✅ Subjects Section */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">📚 Subjects</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Math", "Science", "History", "English"].map((subject, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 text-center hover:bg-purple-500 hover:text-white transition cursor-pointer 
                   border border-gray-200 h-24 flex items-center justify-center "
            >
              <p className="font-semibold text-lg">{subject}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Mock Exams Section */}
      <section className="mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">📝 Mock Exams</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        {mockExams.slice(0, visibleExams).map((exam) => (
          <div
            key={exam.id}
            className="flex items-center bg-white shadow-lg rounded-lg border border-gray-200 p-4 gap-4 relative"
          >
            {/* Placeholder Image */}
            <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>

            {/* Exam Info */}
            <div>
              <h3 className="font-bold text-lg text-gray-900">{exam.title}</h3>
              <p className="text-gray-600 text-sm">{exam.description}</p>
            </div>

            {/* Subscribe Button */}
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white text-xs font-semibold py-1 px-3 rounded-full">
              Subscribe
            </button>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <section>
      {visibleExams < mockExams.length && (
        <div className="text-center mt-4">
          <button
            onClick={handleShowMore}
            className="text-gray-800 font-medium hover:underline cursor-pointer"
          >
            Show More
          </button>
        </div>
      )}
    </section>
    </section>

      {/* ✅ Exam Updates Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">📢 Exam Updates</h2>
        <div className="space-y-3">
          {[
            { text: "Update 1: Upcoming Exam", isNew: true },
            { text: "Update 2: Result Announcement", isNew: false },
            { text: "Update 3: New Syllabus", isNew: true },
          ].map((update, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-5 hover:bg-purple-100 transition cursor-pointer flex justify-between items-center"
            >
              <p className="text-gray-700">{update.text}</p>
              {/* ✅ NEW Label */}
              {update.isNew && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Unlock Your Success Section */}
      <div className="flex flex-col items-center justify-center mt-10 bg-white py-10 rounded-lg shadow-xl">
        {/* Image */}
        <div className="mb-6">
          <img src={targetImage} alt="Target" className="w-32 h-32" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-black mb-3">Unlock Your Success</h1>

        {/* Subheading */}
        <p className="text-gray-500 text-lg mb-6">Upgrade to Our Premium Membership Today!</p>

        {/* Button */}
        <button className="bg-purple-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition-all">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
