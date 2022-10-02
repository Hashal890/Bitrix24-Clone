const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate-v2");

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

todoSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Todo", todoSchema);
