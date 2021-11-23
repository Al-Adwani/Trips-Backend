const express = require("express");
const { fetchProfile } = require("./profile.controllers");
const router = express.Router();

router.get("/", fetchProfile);
module.exports = router;
