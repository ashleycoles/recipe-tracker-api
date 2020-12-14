const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const IngredientModel = require('./IngredientModel');
const CuisineModel = require('./CuisineModel').schema;

const recipeSchema = new Schema({
    name: String,
    ingredients: [IngredientModel],
    cuisine: CuisineModel
});

module.exports = mongoose.model('Recipe', recipeSchema);