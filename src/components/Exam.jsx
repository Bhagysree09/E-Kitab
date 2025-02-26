import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";

const exams = [
  { title: "JEE Preparation", description: "Study material and mock tests by experts.", icon: "📘" },
  { title: "NEET Preparation", description: "Master Physics, Chemistry, and Biology.", icon: "🧬" },
  { title: "UPSC Preparation", description: "Current affairs, history, and polity.", icon: "📜" },
  { title: "CAT Preparation", description: "Logical reasoning, aptitude, and verbal skills.", icon: "📊" },
  { title: "GATE Preparation", description: "Expert resources & problem-solving techniques.", icon: "⚙️" },
  { title: "SSC & Banking", description: "Prepare for SSC, IBPS, SBI, and RBI exams.", icon: "🏦" },
  { title: "JEE Preparation", description: "Study material and mock tests by experts.", icon: "📘" },
  { title: "NEET Preparation", description: "Master Physics, Chemistry, and Biology.", icon: "🧬" },
  { title: "UPSC Preparation", description: "Current affairs, history, and polity.", icon: "📜" },
  { title: "CAT Preparation", description: "Logical reasoning, aptitude, and verbal skills.", icon: "📊" },
  { title: "GATE Preparation", description: "Expert resources & problem-solving techniques.", icon: "⚙️" },
  { title: "SSC & Banking", description: "Prepare for SSC, IBPS, SBI, and RBI exams.", icon: "🏦" },
];

const Exam = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full px-6 py-10 bg-purple-200 relative">
      <h2 className="text-2xl font-bold text-center mb-6">Exam Preparation</h2>

      <div className="w-full max-w-6xl mx-auto relative">
        {/* Left Navigation Button */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-900"
        >
          ◀
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full h-auto"
        >
          {exams.map((exam, index) => (
            <SwiperSlide key={index}>
              <div className="w-60 h-44 p-5 bg-white shadow-md rounded-xl flex flex-col justify-center items-center border border-gray-200 hover:shadow-lg transition duration-300 text-center">
                <div className="text-3xl">{exam.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-gray-800">{exam.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{exam.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Navigation Button */}
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-900"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Exam;
