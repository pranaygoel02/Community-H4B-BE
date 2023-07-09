const express = require("express");
const {generateAccessToken, validateAccessToken} = require("../../middleware/accessToken");
const { registerUser, loginUser, logoutUser } = require("../../controllers/authControllers/index");
const router = express.Router();

router.post("/register", registerUser)
router.post("/login", generateAccessToken, loginUser)
router.delete("/logout", validateAccessToken, logoutUser)

module.exports = router;