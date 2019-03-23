const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    author: String,
    title: String,
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);