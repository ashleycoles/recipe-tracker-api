const graphql = require('graphql');

const {
    GraphQLInputObjectType,
    GraphQLString,
} = graphql;

module.exports = new GraphQLInputObjectType({
    name: 'ingredientinput',
    fields: () => ({
        name: {
            type: GraphQLString
        },
        amount: {
            type: GraphQLString
        }
    })
});
