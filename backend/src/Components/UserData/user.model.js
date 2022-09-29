const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
