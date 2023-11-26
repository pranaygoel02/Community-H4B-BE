const express = require("express");

const router = express.Router();

const AuthRoute = require("./AuthRoute/index");
const SocialLinkRoute = require("./SocialLinkRoute/index");
const UserRoute = require("./UserRoute/index");
const CommunityRoute = require("./CommunityRoute/index");
const AddMemberRoute = require("./AddMemberRoute/index");
const NotificationRoute = require("./NotificationRoute/index");
const CMDKRoute = require("./CMDK/index");

router.get("/", (req, res) => {
    res.send("Welcome to Community Server!");
});

router.use("/auth", AuthRoute);
router.use("/socialLink", SocialLinkRoute);
router.use("/user", UserRoute);
router.use("/community", CommunityRoute);
router.use("/add-member", AddMemberRoute);
router.use("/notification", NotificationRoute);
router.use("/cmdk", CMDKRoute);



module.exports = router;