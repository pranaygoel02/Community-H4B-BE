const express = require("express");
const router = express.Router();

const { createNotification,updateNotification}=require('../../controllers/notificationController/index');

router.post("/createMember", createNotification);
router.post("/updateNotification", updateNotification);
//router.delete("/logout", validateAccessToken, logoutUser)

module.exports = router;