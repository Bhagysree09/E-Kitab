import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./Pages/Courses";
import News from "./Pages/News";
import ExamUpdates from "./Pages/ExamUpdates";
import Plans from "./Pages/Plans";
import Signup from "../src/auth/Signup";
import Login from "./auth/Login";
import Footer from './components/Footer';
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Test from "./dashboard/Test";
import USerDashboard from "./dashboard/UserDashboard";
function App() {
  const user = JSON.parse(localStorage.getItem('auth')) || {};
  const email = user.email || null;
  const role = user.role || null;
  return (
    <>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* Index route with Hero section */}
        <Route path="/" element={<Hero />} />
        
        {/* Courses page route */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/news" element={<News />} />
        <Route path="/exam-update" element={<ExamUpdates />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/dashboard" element={<USerDashboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
 
    </>
  );
};

export default App;
