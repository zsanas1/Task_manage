const express = require("express");
const router = express.Router();

const { signup, login, logout } = require("../controllers/Auth");

// routes for authentication
router.post("/register", signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
