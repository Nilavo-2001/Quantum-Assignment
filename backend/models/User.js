const mongoose = require('mongoose');
const { type } = require('os');
const chatModel = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        dob: {
            type: Date,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }

    }, {
    timestamps: true
}
);

const User = mongoose.model("User", chatModel);

module.exports = User;