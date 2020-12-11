const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Ingredient = require('./ingredient');

const recipeSchema = new Schema({
    name: String,
    ingredients: [Ingredient]
});

module.exports = mongoose.model('Recipe', recipeSchema);