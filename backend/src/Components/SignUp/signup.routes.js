const Signup = require("./signup.controller");
const express = require("express");
const router = express.Router();

router.post("/", Signup.signup);

module.exports = router;
