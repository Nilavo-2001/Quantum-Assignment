const User = require("../models/User");
const apiResponse = require("../utilities/apiResponse");

const allUserInfo = async (req, res) => {
    try {

        // fetching all the the users from the database
        const users = await User.find({}).select("-password");

        return apiResponse(res, true, 200, `All users info fetches sucessfully`, true, {
            users
        });

    } catch (err) {
        console.log(err);
        return apiResponse(res, false, 500, 'Failed to login', false, 'Internal Server Error');
    }
}

module.exports = allUserInfo

