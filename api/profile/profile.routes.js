const express = require("express");
const { fetchProfile, createProfile } = require("./profile.controllers");
const passport = require("passport");
const upload = require("../../middleware/multer");

const router = express.Router();

router.get("/", fetchProfile);

module.exports = router;
