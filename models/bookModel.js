const mongoose = require('mongoose');

const newBooks = mongoose.Schema({
    title : String,
    author : String
});

const bookModel = module.exports = mongoose.model('bookModel', newBooks);
