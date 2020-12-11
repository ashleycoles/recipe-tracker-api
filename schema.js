const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = graphql;

// Mongoose Operations
const RootQuery = require('./graphQlOperations/RootQuery');
const Mutation = require('./graphQlOperations/Mutation');

// Mongoose Models
const RecipeModel = require('./mongoModels/RecipeModel');
const CuisineModel = require('./mongoModels/CuisineModel');

// GraphQL Types
const IngredientInputType = require('./graphqlTypes/IngredientInputType');
const RecipeType = require('./graphqlTypes/RecipeType');
const CuisineType = require('./graphqlTypes/CuisineType');







module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});