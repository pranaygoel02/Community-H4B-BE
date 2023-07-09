const express = require("express");

const router = express.Router();

const { createCommunity, getAllCommunities, getCommunityById, updateCommunity } = require("../../controllers/communityControlllers/index");
const { validateAccessToken } = require("../../middleware/accessToken");

router.get("/", getAllCommunities);
router.get('/:communityId', getCommunityById);
// router.get('/get-user-communities', validateAccessToken, )
router.post('/create', validateAccessToken ,createCommunity);
router.delete('/:communityId', validateAccessToken,(req, res) => {});
router.put('/:communityId',  validateAccessToken, updateCommunity);

module.exports = router;