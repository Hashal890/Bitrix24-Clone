const UserLogin = require("./user.controller");
const express = require("express");
const router = express.Router();

router.post("/signup", UserLogin.signup);
router.post("/login", UserLogin.login);

module.exports = router;
