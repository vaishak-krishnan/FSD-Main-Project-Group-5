const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const users = new Schema({
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        required: true
    },

    email_id:{
        type: String,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    office_location: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    }

})
const userData = mongoose.model('user',users);
module.exports = userData;