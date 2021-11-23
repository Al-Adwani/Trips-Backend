const Profile = require("../../models/Profile");
exports.fetchProfile = async (profileId, next) => {
  try {
    const profiles = await Profile.findById(profileId);
    return profiles;
  } catch (error) {
    next(error);
    console.log(error);
  }
};
