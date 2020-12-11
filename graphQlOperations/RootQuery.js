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
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return RecipeModel.findById(args.id)
            }
        },
        recipes: {
            type: new GraphQLList(RecipeType),
            resolve(parent, args) {
                return RecipeModel.find({});
            }
        },
        cuisine: {
            type: CuisineType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parent, args) {
                return CuisineModel.findById(args.id)
            }
        },
        cuisines: {
            type: new GraphQLList(CuisineType),
            resolve(parent, args) {
                return CuisineModel.find({});
            }
        }
    }
});