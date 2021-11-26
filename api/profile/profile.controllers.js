const Profile = require("../../models/Profile");

exports.fetchProfile = async (req, res, next) => {
  try {

   
    const userProfile = await Profile.findOne({
      user: req.user._id.toString(),
    });

    return res.json(userProfile);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

exports.fetchProfiletoUpdate = async (profileId, next) => {
  try {
    const profile = await Profile.findById(profileId);
    return profile;
  } catch (error) {
    next(error);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    console.log(req.profile);
    if (req.profile.user.toString() === req.user._id.toString()) {
      if (req.file) {
        req.body.image = `/${req.file.path}`;
        req.body.image = req.body.image.replace("\\", "/");
      }
      const updatedProfile = await Profile.findByIdAndUpdate(
        req.profile,
        req.body
      );
      res.status(204).json(updatedProfile);
    } else {
      next({ status: 401, message: "You are not the Owner" });
    }
  } catch (error) {
    next(error);
  }
};

// .populate({
//   path: "user",
//   select: [_id, username],
// });

// exports.fetchListProfile = async (req, res, next) => {
//   try {
//     //populate :نفس سبلنق المودل نبي نعبيه
//     const profile = await Profile.find().populate("user");
//     return res.status(200).json(profile);
//   } catch (error) {
//     next(error);
//     console.log(error);
//   }
// };
// exports.createProfile = async (res, req, next) => {
//   try {
//     req.body.user = req.user._id;

//     const newProfile = await Profile.create(req.body);

//     res.status(201).json(newProfile);
//   } catch (error) {
//     next(error);
//   }
// };

// exports.updateProfile = async (req, res, next) => {
//   try {
//     if (req.file) {
//       req.body.image = `/${req.file.path}`;
//       req.body.image = req.body.image.replace("\\", "/");
//     }

//     req.body.user = req.params.userId;

//     if ()

//     // const updatedProfile = await Profile.findByIdAndUpdate(
//     //   req.body.user,
//     //   req.body
//     // );

//     // const newProfile = await Profile.create(req.body)
//     res.status(201).json(updatedProfile);
//   } catch (error) {
//     console.log(error);
//   }
// };
// How will update profile know that its the user's profile?
// };
