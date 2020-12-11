const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
} = graphql;

module.exports = new GraphQLObjectType({
    name: 'ingredient',
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