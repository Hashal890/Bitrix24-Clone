const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const mainRouter = require("./Components/UserData/user.routes");
const todoRouter = require("./Components/TodoTask/Todo.routes");

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", mainRouter);
app.use("/", todoRouter)

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`http://localhost:${PORT}`);
});
