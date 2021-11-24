const express = require("express");
const { fetchListProfile } = require("./profile.controllers");
const router = express.Router();

router.get("/userProfile", fetchListProfile);

module.exports = router;
