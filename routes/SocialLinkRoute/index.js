const express = require("express");

const router = express.Router();

const {createSocialLink, deleteSocialLink,getUserSocialLinks, getCommunitySocialLinks, updateSocialLink} = require('../../controllers/socialLinkControllers/index');
const { validateAccessToken } = require("../../middleware/accessToken");

router.post('/create', validateAccessToken, createSocialLink);
router.get('/user/:userId', validateAccessToken, getUserSocialLinks);
router.get('/community/:communityId', validateAccessToken, getCommunitySocialLinks);
router.put('/:socialLinkId', validateAccessToken, updateSocialLink);
router.delete('/:socialLinkId', validateAccessToken, deleteSocialLink);

module.exports = router;