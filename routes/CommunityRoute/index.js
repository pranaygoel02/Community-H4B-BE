const express = require("express");

const router = express.Router();

const { createCommunity, getAllCommunities, getCommunityById, updateCommunity, getUserCommunities } = require("../../controllers/communityControlllers/index");
const { validateAccessToken } = require("../../middleware/accessToken");

router.get("/", getAllCommunities);
router.get('/single/:communityId', getCommunityById);
router.get('/get/user-communities', validateAccessToken, getUserCommunities )
router.post('/create', validateAccessToken ,createCommunity);
router.delete('/:communityId', validateAccessToken,(req, res) => {});
router.put('/:communityId',  validateAccessToken, updateCommunity);

module.exports = router;