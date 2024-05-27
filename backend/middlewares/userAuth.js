
const jwt = require('jsonwebtoken');
const apiResponse = require('../utilities/apiResponse');
const User = require('../models/User');

const userAuth = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    //check if no token is provided
    if (!token) {
        return apiResponse(res, false, 401, 'Failed to Authorize', false, 'Auth Token not found');
    }
    try {
        // verifying the jwt token
        const { email } = jwt.verify(token, process.env.jwt_key);

        //fetching the user with the given email
        const checkUser = await User.findOne({ email })

        // check if the user does not exsist 
        if (!checkUser) {
            return apiResponse(res, false, 401, 'Failed to Authorize', false, 'User does not exsist');
        }

        req.user = checkUser;

        next();
    } catch (err) {
        console.log(err);
        return apiResponse(res, false, 500, 'Failed to Authorize', false, 'Internal Server Error');
    }
};

module.exports = userAuth;