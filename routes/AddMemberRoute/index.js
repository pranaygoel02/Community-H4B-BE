const express = require("express");
const router = express.Router();

const { createNotification,updateNotification}=require('../../controllers/notificationController/index');
const { validateAccessToken } = require("../../middleware/accessToken");

router.post("/create-member", validateAccessToken, createNotification);
router.post("/update-notification", validateAccessToken, updateNotification);
//router.delete("/logout", validateAccessToken, logoutUser)

module.exports = router;