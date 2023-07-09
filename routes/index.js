const express = require("express");

const router = express.Router();
const AuthRoute = require("./AuthRoute/index");

router.get("/", (req, res) => {
    res.json({message: "Welcome to Community Server!"});
});

router.use("/auth", AuthRoute);

module.exports = router;