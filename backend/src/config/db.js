const mongoose = require("mongoose");

const connect = () => {
  console.log("mongo connect");
  return mongoose.connect("mongodb://127.0.0.1:27017/bitrix24");
};

module.exports = connect;
