const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: function () { return this.isVerified; } },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: function () { return this.isVerified; } },
  password: { type: String, required: function () { return this.isVerified; } },
  isVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", UserSchema);
