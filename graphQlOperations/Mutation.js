const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLString
} = graphql;

// GraphQL Types
const RecipeType = require('../graphqlTypes/RecipeType');
const CuisineType = require('../graphqlTypes/CuisineType');
const IngredientInputType = require('../graphqlTypes/IngredientInputType');

// Mongoose Models
const RecipeModel = require('../mongoModels/RecipeModel');
const CuisineModel = require('../mongoModels/CuisineModel');

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCuisine: {
            type: CuisineType,
            description: 'Add a single cuisine',
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: "Name of the cuisine"
                }
            },
            resolve(parent, args) {
                let cuisine = new CuisineModel({
                    name: args.name
                })
                return cuisine.save();
            }
        },
        addRecipe: {
            type: RecipeType,
            description: 'Add a single recipe',
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'Name of the recipe'
                },
                ingredients: {
                    type: new GraphQLNonNull(GraphQLList(IngredientInputType)),
                    description: 'Array of IngredientTypes'
                }
            },
            resolve(parent, args) {
                let recipe = new RecipeModel({
                    name: args.name,
                    ingredients: args.ingredients
                });
                return recipe.save();
            }
        }
    }
});