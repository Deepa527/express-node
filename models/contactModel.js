const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add contact Name"]
    }, email: {
        type: String,
        required: [true, "Please add email"],
    }, phone: {
        type: String,
        required: [true, "Please add contact"],
    }
},)

module.exports = mongoose.model("Contact", contactSchema);