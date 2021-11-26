const express = require("express");
const {
  updateProfile,
  fetchProfiletoUpdate,
} = require("./profile.controllers");
const router = express.Router();
const { fetchProfile } = require("./profile.controllers");
const passport = require("passport");
const upload = require("../../middleware/multer");

// router.get("/userProfile", fetchListProfile);

router.param("profileId", async (req, res, next, profileId) => {
  const profile = await fetchProfiletoUpdate(profileId, next);
  if (profile) {
    req.profile = profile;
    next();
  } else {
    next({ status: 404, message: "Profile Not Found!" });
  }
});

/* router.post; */

router.get("/", passport.authenticate("jwt", { session: false }), fetchProfile);

router.put(
  "/:profileId",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  updateProfile
);

module.exports = router;
