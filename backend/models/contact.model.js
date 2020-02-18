const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }, 
    phone: {
        type: Number,
        required: true,
        minlength: 6
    },
    email: String,
    title: String,
    company: String,
    labels: String
}, {
    timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;