const express = require("express");

const router = express.Router();

const { getCmdkConfiguration } = require("../../controllers/cmdkControllers/index");

router.get("/", getCmdkConfiguration);

module.exports = router;