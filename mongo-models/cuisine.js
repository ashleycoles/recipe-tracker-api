const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cuisineSchema = new Schema({
    _id: mongoose.ObjectId,
    name: String,
});

module.exports = mongoose.model('Cuisine', cuisineSchema);