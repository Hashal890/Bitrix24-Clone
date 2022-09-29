const Todo = require("./Todo.controller");
const express = require("express");
const router = express.Router();

router.post("/", Todo.Todo);

module.exports = router;