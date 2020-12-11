const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList
} = graphql;


// GraphQL Types
const RecipeType = require('../graphqlTypes/RecipeType');
const CuisineType = require('../graphqlTypes/CuisineType');

// Mongoose Models
const RecipeModel = require('../mongoModels/RecipeModel');
const CuisineModel = require('../mongoModels/CuisineModel');


module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        recipe: {
            type: RecipeType,
            description: 'Retrieve a single recipe by ID',
            args: {
                id: {
                    type: GraphQLID,
                    description: 'ObjectId'
                }
            },
            resolve(parent, args) {
                return RecipeModel.findById(args.id)
            }
        },
        recipes: {
            type: new GraphQLList(RecipeType),
            description: 'Retrieve all recipes',
            resolve(parent, args) {
                return RecipeModel.find({});
            }
        },
        cuisine: {
            type: CuisineType,
            description: 'Retrieve a single cuisine by ID',
            args: {
                id: {
                    type: GraphQLID,
                    description: 'ObjectId'
                }
            },
            resolve(parent, args) {
                return CuisineModel.findById(args.id)
            }
        },
        cuisines: {
            type: new GraphQLList(CuisineType),
            description: "Retrieve all cuisines",
            resolve(parent, args) {
                return CuisineModel.find({});
            }
        }
    }
});