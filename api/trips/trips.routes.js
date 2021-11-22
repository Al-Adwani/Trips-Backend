const express = require("express");
const passport = require("passport");
const upload = require("../../middleware/multer");
const { fetchTripList, tripCreate } = require("./trips.controllers");

const router = express.Router();

router.get("/", fetchTripList);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  tripCreate
);

module.exports = router;
