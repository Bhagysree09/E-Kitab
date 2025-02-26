const express = require("express");
const { signup, sendOTP, verifyOTP, login, getUsers } = require("../controller/authController");

const { validateSignup } = require("../middleware/validateMiddleware");

const router = express.Router();

router.post("/signup", validateSignup, signup);
router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post("/login", login);
router.get("/users", getUsers); // New route to get registered users

module.exports = router;

