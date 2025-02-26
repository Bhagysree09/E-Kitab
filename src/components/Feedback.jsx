import React from "react";
import Slider from "react-slick";
import woman from "../assets/woman.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeedbackSection = () => {
  // Example testimonials data with images
  const testimonials = [
    {
      name: "Katya Ergisilova",
      role: "Art & Design",
      feedback:
        "The teacher classes have so many learning options that focus on real-world tasks & examples. I have learned a lot from them!",
      rating: 5,
      image: woman,
    },
    {
      name: "Sara Al-Hariri",
      role: "Software Engineer",
      feedback:
        "A great platform to learn from real examples and practical scenarios. Highly recommended for all aspiring developers!",
      rating: 5,
      image: woman,
    },
    {
      name: "Habeba Alvira",
      role: "Student",
      feedback:
        "This is the best place to learn new skills in English. Each trainer is super helpful. I can easily recommend this to all students.",
      rating: 5,
      image: woman,
    },
    {
        name: "Katya Ergisilova",
        role: "Art & Design",
        feedback:
          "The teacher classes have so many learning options that focus on real-world tasks & examples. I have learned a lot from them!",
        rating: 5,
        image: woman,
      },
      {
        name: "Sara Al-Hariri",
        role: "Software Engineer",
        feedback:
          "A great platform to learn from real examples and practical scenarios. Highly recommended for all aspiring developers!",
        rating: 5,
        image: woman,
      },
      {
        name: "Habeba Alvira",
        role: "Student",
        feedback:
          "This is the best place to learn new skills in English. Each trainer is super helpful. I can easily recommend this to all students.",
        rating: 5,
        image: woman,
      },
  ];

  // Settings for react-slick
  const settings = {
    dots: true, // display navigation dots
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000, // slide every 3 seconds
    arrows: false, // hide next/prev arrows
  };

  return (
    <section className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-8">
          Let’s see what our students are saying?
        </h2>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-4">
              <div className="p-6 bg-purple-50 rounded-lg shadow-lg flex flex-col items-center">
                {/* Profile Image & Name/Role */}
                <div className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-sm text-purple-700">{item.role}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: item.rating }, (_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-500 fill-current mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.343 4.134a1 1 0 00.95.69h4.356c.969 0 1.37 1.24.588 1.81l-3.52 2.56a1 1 0 00-.364 1.118l1.343 4.135c.3.922-.755 1.688-1.54 1.118l-3.52-2.56a1 1 0 00-1.176 0l-3.52 2.56c-.784.57-1.84-.196-1.54-1.118l1.343-4.135a1 1 0 00-.364-1.118l-3.52-2.56c-.782-.57-.38-1.81.588-1.81h4.356a1 1 0 00.95-.69l1.343-4.134z" />
                    </svg>
                  ))}
                </div>

                {/* Feedback Text */}
                <p className="text-black mb-4 text-center">"{item.feedback}"</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeedbackSection;
