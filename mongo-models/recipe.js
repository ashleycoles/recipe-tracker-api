const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    _id: mongoose.ObjectId,
    name: String
});

module.exports = mongoose.model('Recipe', recipeSchema);