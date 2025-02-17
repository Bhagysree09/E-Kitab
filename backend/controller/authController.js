const User = require("../modal/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const sendMail = require("../middleware/sendMail.js");

// Generate a random 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Configure Nodemailer (Only used in `sendOTP`, `register` uses `sendMail`)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ===== REGISTER (New Method) =====
const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    let user = await User.findOne({ email });

    if (user)
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });

    const hashPassword = await bcrypt.hash(password, 10);

    user = new User({
      name,
      email,
      password: hashPassword,
    });

    // Generate OTP and activation token
    const otp = generateOTP();
    const activationToken = jwt.sign(
      { user, otp },
      process.env.JWT_SECRET,
      { expiresIn: "5m" }
    );

    // Email Data
    const data = {
      name,
      otp,
    };

    // Send Email
    await sendMail(email, `Technivers`, data);

    // Save OTP to User
    user.otp = otp;
    user.otpExpires = new Date(Date.now() + 10 * 60 * 1000); // Expires in 10 min
    await user.save();

    res.status(200).json({
      message: "OTP sent to your email",
      activationToken,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error: error,
    });
  }
};

// ===== SIGNUP (Existing Method) =====
const signup = async (req, res) => {
  const { name, email, preparationType, mobile, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists!" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ name, email, preparationType, mobile, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Signup successful, verify OTP!" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// ===== SEND OTP =====
const sendOTP = async (req, res) => {
  const { email } = req.body;

  try {
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // Expires in 10 minutes

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It will expire in 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error sending OTP" });
  }
};

// ===== VERIFY OTP =====
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.otp !== otp || user.otpExpires < new Date()) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    // Mark user as verified
    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error verifying OTP" });
  }
};

// ===== LOGIN =====
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });

    if (!user.isVerified)
      return res.status(400).json({ message: "Please verify OTP before logging in!" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful!", token });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// ===== GET ALL REGISTERED USERS =====
const getUsers = async (req, res) => {
  try {
    // Exclude the password field (and any other sensitive fields)
    const users = await User.find({}, "-password");
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// ===== EXPORT MODULES =====
module.exports = {
  register,
  signup,
  sendOTP,
  verifyOTP,
  login,
  getUsers,
};
