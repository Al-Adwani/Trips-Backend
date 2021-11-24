const express = require("express");
const { fetchListProfile } = require("./profile.controllers");
const router = express.Router();

router.get("/userProfile", fetchListProfile);

const { fetchProfile, createProfile } = require("./profile.controllers");
const passport = require("passport");
const upload = require("../../middleware/multer");


// router.get("/", fetchProfile);


module.exports = router;
