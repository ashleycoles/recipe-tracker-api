const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} = graphql;

module.exports = new GraphQLObjectType({
    name: 'Cuisine',
    description: 'A world cuisine',
    fields: () => ({
        _id: {
            type: GraphQLID,
            description: "ObjectId"
        },
        name: {
            type: GraphQLString,
            description: "Name of the cuisine"
        }
    })
});