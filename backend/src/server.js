const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const loginRouter = require("./Components/Login/login.routes");
const signupRouter = require("./Components/Signup/signup.routes");

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/login", loginRouter);
app.use("/signup", signupRouter);


app.listen(PORT, async () => {
  await dbConnect();
  console.log(`http://localhost:${PORT}`);
});
