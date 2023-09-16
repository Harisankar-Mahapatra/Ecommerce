const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    pass: {type: String, reuquired: true}
}, {
    versionKey: false
})

const userModel = new mongoose.model('user_details', userSchema)
module.exports = userModel