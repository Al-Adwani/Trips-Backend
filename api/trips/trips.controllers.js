const Trip = require("../../models/Trip");

exports.fetchTrip = async (tripId, next) => {
  try {
    const trip = await Trip.findById(tripId);
    return trip;
  } catch (error) {
    next(error);
  }
};

exports.fetchTripList = async (req, res, next) => {
  try {
    const trips = await Trip.find();
    return res.json(trips);
  } catch (error) {
    next(error);
  }
};

exports.tripCreate = async (req, res, next) => {
  try {
    if (req.file) {
      // /media/imagename.jpg
      req.body.image = `/${req.file.path}`;
    }
    req.body.owner = req.user._id;

    const newTrip = await Trip.create(req.body);

    res.status(201).json(newTrip);
  } catch (error) {
    next(error);
  }
};

exports.tripDelete = async (req, res, next) => {
  try {
    console.log(req.trip.owner.toString());
    console.log(req.user._id);

    if (req.trip.owner.toString() === req.user._id.toString()) {
      await req.trip.remove();
      res.status(204).end();
    } else {
      next({ status: 401, message: "You are not the Owner" });
    }
  } catch (error) {
    next(error);
  }
};
