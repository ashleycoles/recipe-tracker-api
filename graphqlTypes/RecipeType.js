const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const IngredientType = require('./IngredientType');

module.exports = new GraphQLObjectType({
    name: 'Recipe',
    description: 'A single recipe',
    fields: () => ({
        _id: {
            type: GraphQLID,
            description: 'ObjectId'
        },
        name: {
            type: GraphQLString,
            description: 'Name of the recipe'
        },
        ingredients: {
            type: new GraphQLList(IngredientType),
            description: 'Array of IngredientTypes'
        }
    })
});