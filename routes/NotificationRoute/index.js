const express= require('express');
const {getUserNotifications} = require('../../controllers/notificationController'); 
const {validateAccessToken} = require('../../middleware/accessToken');

const NotificationModel = require('../../models/notificationSchema');

const router = express.Router();

router.get('/', validateAccessToken, getUserNotifications);

module.exports = router;