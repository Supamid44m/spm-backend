const { Schema } = require("mongoose");

const userSchema = new Schema({
    email: {
        required: true,
        type: String,
        lowercase: true,
        unique: true,
    },
    password: {
        required: true,
        type: String,
    }
})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;