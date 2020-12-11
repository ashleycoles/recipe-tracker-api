const graphql = require('graphql');

const {
    GraphQLInputObjectType,
    GraphQLString,
} = graphql;

module.exports = new GraphQLInputObjectType({
    name: 'IngredientInput',
    description: 'An ingredient with associated amount',
    fields: () => ({
        name: {
            type: GraphQLString,
            description: 'Name of the ingredient'
        },
        amount: {
            type: GraphQLString,
            description: 'Amount of the ingredient with units'
        }
    })
});
