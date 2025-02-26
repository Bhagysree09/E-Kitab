import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="w-full">
      {/* ================ Subscription Section ================ */}
      {/* <div className="bg-white text-black py-8 px-4">
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
      </div> */}

      {/* ================ Footer Content ================ */}
      <div className="bg-purple-900 text-white py-8 px-4 mt-10">
        {/* Grid Section: Full width */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: E-learning Info + Social Icons */}
          <div>
            <h3 className="text-xl font-bold mb-2">E-learning</h3>
            <p className="mb-4">
              A learning platform that is more than just reading or hearing about a subject.
              Build new skills and expand your knowledge with our comprehensive courses.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Office Info */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Office</h4>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" />
              1234 E-learning Street, Knowledge City
            </p>
            <p className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              +1 234 567 890
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              info@elearning.com
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li className="mb-1">
                <a href="/" className="block hover:text-purple-300">Home</a>
              </li>
              <li className="mb-1">
                <a href="/about" className="block hover:text-purple-300">About Us</a>
              </li>
              <li className="mb-1">
                <a href="/courses" className="block hover:text-purple-300">Courses</a>
              </li>
              <li className="mb-1">
                <a href="/contact" className="block hover:text-purple-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Recent Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Recent Courses</h4>
            <ul>
              <li className="mb-1">
                <a href="/courses/react-basics" className="block hover:text-purple-300">
                  SSC 
                </a>
              </li>
              <li className="mb-1">
                <a href="/courses/tailwind-css" className="block hover:text-purple-300">
                  UPSC Preparation
                </a>
              </li>
              <li className="mb-1">
                <a href="/courses/advanced-js" className="block hover:text-purple-300">
                  SSc Preparation
                </a>
              </li>
              <li className="mb-1">
                <a href="/courses/ui-ux" className="block hover:text-purple-300">
                  Neet Preparation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ================ Footer Bottom Section ================ */}
        <div className="mt-8">
          <hr className="border-gray-300" />
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 align-middle">
            <div className="text-center">
              © {new Date().getFullYear()} E-learning. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="/contact" className="hover:text-purple-300">
                Support
              </a>
              <a href="/courses" className="hover:text-purple-300">
                Services
              </a>
              <a href="/terms" className="hover:text-purple-300">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
