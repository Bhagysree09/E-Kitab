import React from "react";
import Navbar from "../components/Navbar"; // Ensure the correct path
import Footer from "../components/Footer"; // Ensure the correct path

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
     
      <div className="flex-grow">
        <div className="bg-purple-100 py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            {/* <p className="text-gray-500">Home &gt; Contact</p> */}
          </div>
        </div>

        <div className="container mx-auto py-12 px-6 grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
              dictum velit.
            </p>
            <div className="mb-4">
              <p className="font-semibold">Address:</p>
              <p>720 Depost St, Atlanta, Georgia 30000</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Email:</p>
              <p>contact@studdy.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border p-2 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-2 rounded w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded w-full mt-4"
              />
              <textarea
                placeholder="Message"
                className="border p-2 rounded w-full mt-4 h-32"
              ></textarea>
              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
