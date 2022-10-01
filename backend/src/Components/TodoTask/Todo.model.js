const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Must be provided todo title"],
    maxlength: [50, "name must be less than 50 characters"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Must be provided todo description"],
  },
  assigne: {
    type: String,
    required: [true, "Must be provided assigne name"],
  },
  author: {
    type: String,
    required: [true, "Must be provided author name"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: String,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
