import React from "react"; 
import elearning from '../assets/elearning.jpg';
import learning from '../assets/learning.jpg';
import profile from '../assets/profile.png';
import Footer from '../components/Footer';
const AboutUs = () => {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-6">About Us</h2>
        <p className="text-center text-lg mb-8">
          Our company is dedicated to providing top-quality e-learning solutions to empower individuals and organizations.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src={elearning}
            alt="E-Learning"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
          <div>
            <h3 className="text-2xl font-bold text-purple-600">What is E-Learning?</h3>
            <p className="mt-4 text-lg">
              E-learning is a modern approach to education that utilizes digital platforms to deliver high-quality learning experiences. 
              It enables learners to access educational content from anywhere at any time, making learning more flexible and efficient. 
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <div>
            <h3 className="text-2xl font-bold text-purple-600">Our Mission</h3>
            <p className="mt-4 text-lg">
              Our mission is to help millions of learners grow better by providing high-quality educational content and innovative learning tools. 
              We aim to bridge the knowledge gap by making education more accessible and interactive.
            </p>
          </div>
          <img
            src={learning}
            alt="Our Mission"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-purple-600 text-center">Our Founders</h3>
          <div className="grid md:grid-cols-3 gap-8 items-center text-center mt-6">
            <div>
              <img
                src={profile}
                alt="Anurag Sahoo"
                className="rounded-lg shadow-lg mx-auto w-32 h-32"
              />
              <h3 className="text-2xl font-bold text-purple-600 mt-4">Anurag Sahoo</h3>
              <p className="text-lg">Founder</p>
            </div>
            <div>
              <img
                src={profile}
                alt="Bhagyasree Sendh"
                className="rounded-lg shadow-lg mx-auto w-32 h-32"
              />
              <h3 className="text-2xl font-bold text-purple-600 mt-4">Bhagyasree Sendh</h3>
              <p className="text-lg">CTO</p>
            </div>
            <div>
              <img
                src={profile}
                alt="Director Name"
                className="rounded-lg shadow-lg mx-auto w-32 h-32"
              />
              <h3 className="text-2xl font-bold text-purple-600 mt-4">Director Name</h3>
              <p className="text-lg">Director</p>
            </div>
          </div>
        </div>
        
        {/* Employees and Branches Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-purple-600 text-center">Our Employees & Branches</h3>
          <div className="grid md:grid-cols-2 gap-8 text-center mt-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-purple-600">Total Employees</h4>
              <p className="text-lg mt-2">500+</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-purple-600">Total Branches</h4>
              <p className="text-lg mt-2">10+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
