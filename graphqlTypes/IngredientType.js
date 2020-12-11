const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
} = graphql;

module.exports = new GraphQLObjectType({
    name: 'ingredient',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        amount: {
            type: GraphQLString
        }
    })
});