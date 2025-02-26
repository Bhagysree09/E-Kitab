
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Signup = () => {
  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    name: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const PasswordFields = ({ formData, handleChange }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  }  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOTP = async () => {
    if (!formData.email) {
      alert("Please enter your email.");
      return;
    }
    try {
      const response = await fetch("http://localhost:5001/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await response.json();
      if (data.message === "OTP sent successfully") {
        alert("OTP sent successfully!");
        setOtpSent(true);
        setStep(2);
      } else {
        alert(data.message || "Failed to send OTP!");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred while sending OTP. Please try again.");
    }
  };

  const verifyOTP = async () => {
    if (!formData.otp) {
      alert("Please enter the OTP!");
      return;
    }
    try {
      const response = await fetch("http://localhost:5001/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp: formData.otp.trim() }),
      });
      const data = await response.json();
      if (response.ok && data.message === "OTP verified successfully") {
        alert("OTP verified successfully!");
        setOtpVerified(true);
        setStep(3);
      } else {
        alert(data.error || data.message || "Invalid or expired OTP!");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred during OTP verification. Please try again.");
    }
  };

  const resendOTP = () => {
    sendOTP();
  };

  const handleSignup = async () => {
    if (!formData.name || !formData.mobile || !formData.password || !formData.confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.mobile,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Account created successfully!");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md transition-all duration-300">

        {/* Step 1: Enter Email & Send OTP */}
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Enter Your Email</h2>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-4"
            />
            <button onClick={sendOTP} className="w-full bg-indigo-500 text-white py-3 rounded-lg">Send OTP</button>
          </>
        )}

        {/* Step 2: Enter & Verify OTP */}
        {step === 2 && otpSent && !otpVerified && (
          <>
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Verify OTP</h2>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg mb-2"
            />
            <button onClick={verifyOTP} className="w-full bg-indigo-500 text-white py-3 rounded-lg mb-2">Verify OTP</button>
            <button onClick={resendOTP} className="w-full bg-gray-500 text-white py-2 rounded-lg">Resend OTP</button>
          </>
        )}

        {/* Step 3: Complete Signup */}
        {step === 3 && otpVerified && (
          <>
            <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Complete Your Registration</h2>
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg mb-2" />
            <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className="w-full p-3 border rounded-lg mb-2" />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-lg mb-2" />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full p-3 border rounded-lg mb-4" />
           
            <button onClick={handleSignup} className="w-full bg-indigo-500 text-white py-3 rounded-lg">Sign Up</button>
          </>
        )}
        <div className="mt-6 text-center text-gray-600">
          <p>
            Already registered? {" "}
            <span
              className="text-indigo-600 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
