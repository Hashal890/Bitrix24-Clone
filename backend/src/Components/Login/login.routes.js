const Login = require("./login.controller");
const express = require("express");
const router = express.Router();

router.post("/", Login.login);

module.exports = router;
