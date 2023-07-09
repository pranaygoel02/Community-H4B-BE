const express = require('express');
const { updateUser, getUser } = require('../../controllers/userControllers/index');
const {validateAccessToken} = require('../../middleware/accessToken');

const router = express.Router();

router.put('/', validateAccessToken, updateUser );
router.get('/', validateAccessToken, getUser)

module.exports = router;