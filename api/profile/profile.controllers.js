const Profile = require("../../models/Profile");

// exports.fetchProfile = async (req, res, next) => {
//   try {
//     const profiles = await Profile.findById();
//     return profiles;
//   } catch (error) {
//     next(error);
//     console.log(error);
//   }
// };

exports.fetchListProfile = async (req, res, next) => {
  try {
    //populate :نفس سبلنق المودل نبي نعبيه
    const profile = await Profile.find().populate("user");
    return res.status(200).json(profile);
  } catch (error) {
    next(error);
    console.log(error);
  }
};
