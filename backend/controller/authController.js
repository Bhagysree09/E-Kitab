
const User = require("../modal/user");
const OTP = require("../modal/otpModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// Generate a random 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ======================= SEND OTP =======================
const sendOTP = async (req, res) => {
  const { email } = req.body;

  try {
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

    // Save or update OTP in the OTP collection
    await OTP.findOneAndUpdate(
      { email: email.toLowerCase() },
      { otp, otpExpires },
      { upsert: true, new: true }
    );

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It will expire in 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Send OTP Error:", error);
    res.status(500).json({ error: "Error sending OTP" });
  }
};

// ======================= VERIFY OTP =======================
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const otpRecord = await OTP.findOne({ email: email.toLowerCase() });
    if (!otpRecord) return res.status(404).json({ error: "OTP not found" });

    if (otpRecord.otp !== otp || otpRecord.otpExpires < new Date()) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    // Mark user as verified without triggering validation
    let user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      user = new User({ email: email.toLowerCase(), isVerified: true });
    } else {
      user.isVerified = true;
    }

    await user.save({ validateBeforeSave: false });

    // Delete OTP after successful verification
    await OTP.deleteOne({ email: email.toLowerCase() });

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("OTP Verification Error:", error);
    res.status(500).json({ error: "Error verifying OTP" });
  }
};

// ======================= SIGNUP =======================
const signup = async (req, res) => {
  const { name, email, phoneNumber, password, confirmPassword } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ message: "User not found. Please request an OTP first." });
    if (!user.isVerified) return res.status(400).json({ message: "Please verify your OTP before signing up." });

    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords do not match" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password.toString(), salt);

    user.name = name;
    user.phoneNumber = phoneNumber;
    user.password = hashedPassword;
    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Error during signup" });
  }
};

// ======================= LOGIN =======================
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.isVerified) return res.status(400).json({ message: "Please verify your OTP before logging in." });

    const isMatch = await bcrypt.compare(password.toString(), user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token, message: "Login successful" });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ======================= GET USERS =======================
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Get Users Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ======================= EXPORT =======================
module.exports = {
  signup,
  sendOTP,
  verifyOTP,
  login,
  getUsers,
};
