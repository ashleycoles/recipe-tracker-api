const graphql = require('graphql');

const {
    GraphQLSchema,
} = graphql;

// Mongoose Operations
const RootQuery = require('./graphQlOperations/RootQuery');
const Mutation = require('./graphQlOperations/Mutation');

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});