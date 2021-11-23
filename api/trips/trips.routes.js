const express = require("express");
const passport = require("passport");
const upload = require("../../middleware/multer");
const {
  fetchTripList,
  tripCreate,
  tripDelete,
  fetchTrip,
  tripUpdate,
} = require("./trips.controllers");

const router = express.Router();

router.param("tripId", async (req, res, next, tripId) => {
  const trip = await fetchTrip(tripId, next);
  if (trip) {
    req.trip = trip;
    next();
  } else {
    next({ status: 404, message: "Trip Not Found!" });
  }
});

router.get("/", fetchTripList);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  tripCreate
);

router.put(
  "/:tripId",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  tripUpdate
);

router.delete(
  "/:tripId",
  passport.authenticate("jwt", { session: false }),
  tripDelete
);

module.exports = router;
