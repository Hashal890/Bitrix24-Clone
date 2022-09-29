const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

const userLogin = mongoose.model("login", loginSchema);

module.exports = userLogin;
