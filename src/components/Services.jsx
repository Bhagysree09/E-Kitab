import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaBook, FaHeadset, FaClock, FaUsers } from "react-icons/fa";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full shadow-md mx-2"
  >
    <FaArrowLeft className="text-black" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-gray-300 hover:bg-gray-400 p-3 rounded-full shadow-md mx-2"
  >
    <FaArrowRight className="text-black" />
  </button>
);

const ServiceSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // ❌ Hides default arrows inside the slider
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const services = [
    { icon: <FaBook className="text-blue-500 text-4xl mx-auto" />, title: "English Language", description: "Learn from the best tutors globally." },
    { icon: <FaUsers className="text-green-500 text-4xl mx-auto" />, title: "Lifetime Support", description: "Our support continues even after training." },
    { icon: <FaHeadset className="text-purple-500 text-4xl mx-auto" />, title: "24/7 Online Support", description: "We provide round-the-clock assistance." },
    { icon: <FaClock className="text-orange-500 text-4xl mx-auto" />, title: "Advanced Courses", description: "Stay ahead with our updated curriculum." },
  ];

  return (
    <div className="py-12 bg-cream text-center">
      {/* Title & Description */}
      <h2 className="text-3xl font-bold">We have special services that will satisfy you</h2>
      <p className="text-gray-600 mt-2 mb-6">
        Our course list is designed with top in-demand skills in mind.
      </p>

      {/* Slider Section */}
      <div className="relative max-w-6xl mx-auto">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                {service.icon}
                <h3 className="text-lg font-semibold mt-3">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Navigation Arrows Below the Slider */}
      <div className="flex justify-center mt-6">
        <CustomPrevArrow onClick={() => document.querySelector(".slick-prev")?.click()} />
        <CustomNextArrow onClick={() => document.querySelector(".slick-next")?.click()} />
      </div>
    </div>
  );
};

export default ServiceSlider;
