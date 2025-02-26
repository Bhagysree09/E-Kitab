import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaPlayCircle, FaStar, FaEye, FaClock } from "react-icons/fa";
import ssc from "../assets/ssc.jpg";
import railway from "../assets/railway.png";
import ias from "../assets/ias.jpg";
import jee from "../assets/jee.jpg";
import neet from "../assets/neet.jpg";
import bank from "../assets/bank.jpg";
import ips from "../assets/ips.jpg";
import tat from "../assets/tat.png";
import cat from "../assets/cat.jpg";
const courses = [
    {
        id: 1,
        title: "SSC CGL Preparation",
        category: "SSC Exams",
        price: "$25.00",
        oldPrice: "$35.00",
        duration: "8 hr 45 min",
        rating: 4.5,
        views: "5.2K",
        videos: "40+",
        img: ssc
    },
    {
        id: 2,
        title: "Banking Exam Mastery",
        category: "Banking",
        price: "$30.00",
        oldPrice: "$45.00",
        duration: "9 hr 30 min",
        rating: 4.2,
        views: "4.5K",
        videos: "35+",
        img: bank,
    },
    {
        id: 3,
        title: "UPSC Complete Guide",
        category: "UPSC",
        price: "$40.00",
        oldPrice: "$50.00",
        duration: "12 hr 10 min",
        rating: 4.8,
        views: "6.8K",
        videos: "50+",
        img: ias,
    },
    {
        id: 4,
        title: "IPS Strategy Course",
        category: "IPS",
        price: "$35.00",
        oldPrice: "$45.00",
        duration: "10 hr 20 min",
        rating: 4.7,
        views: "5.9K",
        videos: "45+",
        img: ips,
    },
    {
        id: 5,
        title: "Railway Exam Prep",
        category: "Railway",
        price: "$20.00",
        oldPrice: "$30.00",
        duration: "7 hr 50 min",
        rating: 4.3,
        views: "3.8K",
        videos: "30+",
        img: railway,
    },
    {
        id: 6,
        title: "CAT Exam Strategy",
        category: "MBA Entrance",
        price: "$45.00",
        oldPrice: "$55.00",
        duration: "11 hr 15 min",
        rating: 4.6,
        views: "5.3K",
        videos: "42+",
        img: cat,
    },
    {
        id: 7,
        title: "JEE Advanced Preparation",
        category: "Engineering",
        price: "$50.00",
        oldPrice: "$65.00",
        duration: "13 hr 5 min",
        rating: 4.9,
        views: "7.2K",
        videos: "55+",
        img: jee,
    },
    {
        id: 8,
        title: "NEET Biology Crash Course",
        category: "Medical",
        price: "$38.00",
        oldPrice: "$48.00",
        duration: "9 hr 50 min",
        rating: 4.5,
        views: "4.9K",
        videos: "38+",
        img: neet,
    },
    {
        id: 9,
        title: "TET Exam Preparation",
        category: "Teaching",
        price: "$22.00",
        oldPrice: "$32.00",
        duration: "8 hr 30 min",
        rating: 4.4,
        views: "3.7K",
        videos: "33+",
        img: tat,
    },
];

const Courses = () => {
    return (
        <div className="py-10 bg-purple-100">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                Popular Courses
            </h2>
            <p className="text-center text-gray-600 mb-8">
            Our course list is arranged with those skills which are currently in most demand in the country and outside the country.
            </p>

            <div className="max-w-6xl mx-auto px-6">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {courses.map((course) => (
                        <SwiperSlide key={course.id}>
                            <div className="bg-white shadow-lg rounded-lg p-5">
                                <img
                                    src={course.img}
                                    alt={course.title}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                                <div className="mt-3">
                                    <span className="text-sm text-gray-500">{course.category}</span>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {course.title}
                                    </h3>
                                    <div className="flex items-center text-gray-600 text-sm mt-2">
                                        <FaEye className="mr-1 text-blue-500" />
                                        {course.views} Views
                                        <FaClock className="ml-4 mr-1 text-green-500" />
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <FaPlayCircle className="text-red-500 mr-2" />
                                        <span className="text-sm text-gray-700">{course.videos} Videos</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <FaStar className="text-yellow-500 mr-2" />
                                        <span className="text-gray-800 font-medium">{course.rating}</span>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <div>
                                            <span className="text-lg font-bold text-gray-800">
                                                {course.price}
                                            </span>
                                            <span className="text-sm text-gray-500 line-through ml-2">
                                                {course.oldPrice}
                                            </span>
                                        </div>
                                        <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Courses;
