const Trip = require("../../models/Trip");

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
