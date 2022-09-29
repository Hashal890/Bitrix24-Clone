const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  email: { type: String, required: true },
});

const userSignup = mongoose.model("signup", signupSchema);

module.exports = userSignup;
