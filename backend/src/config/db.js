const mongoose = require("mongoose");

const connect = () => {
  console.log("mongo connect");
  return mongoose.connect(
    "mongodb+srv://vishalmahale11:js864BTBC24fWlwZ@cluster0.tktvy3k.mongodb.net/bitrixstack?retryWrites=true&w=majority"
  );
};

module.exports = connect;

// const mongoose = require("mongoose");

// const connect = () => {
//   console.log("mongo connect");
//   return mongoose.connect(
//     "mongodb://127.0.0.1:27017/bitrix"
//   );
// };

// module.exports = connect;
