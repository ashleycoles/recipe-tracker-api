const graphql = require('graphql');

const {
    GraphQLInputObjectType,
    GraphQLString,
} = graphql;

module.exports = new GraphQLInputObjectType({
    name: 'CuisineInput',
    description: 'A world cuisine',
    fields: () => ({
        name: {
            type: GraphQLString,
            description: "Name of the cuisine"
        }
    })
});