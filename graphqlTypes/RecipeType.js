const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const IngredientType = require('./IngredientType');

module.exports = new GraphQLObjectType({
    name: 'recipes',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        ingredients: {
            type: new GraphQLList(IngredientType)
        }
    })
});