const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const officer_Detail = new Schema({
    name: {
        type: String,
        required: true
    },
    contact_number: {
        type: Number,
        required: true
    },
    email_id:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }

})
const officerData = mongoose.model('officer',officer_Detail);
module.exports = officerData;