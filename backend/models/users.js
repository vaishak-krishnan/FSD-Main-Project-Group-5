const mongoose = require('mongoose');
<<<<<<< HEAD

=======
>>>>>>> 58fd3f7 (pushing from anusha)
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
<<<<<<< HEAD

=======
>>>>>>> 58fd3f7 (pushing from anusha)
})
const userData = mongoose.model('user',users);
module.exports = userData;