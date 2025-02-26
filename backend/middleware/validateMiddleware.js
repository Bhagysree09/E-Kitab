const { check, validationResult } = require("express-validator");

exports.validateSignup = [
  check("name", "Name is required").not().isEmpty(),
  check("email", "Invalid email").isEmail(),
  check("phoneNumber", "Invalid mobile number")
    .isMobilePhone()
    .isLength({ min: 10, max: 10 }),
  check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
