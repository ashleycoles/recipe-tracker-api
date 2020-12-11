const graphql = require('graphql');

const Recipe = require('./mongo-models/recipe');
const Cuisine = require('./mongo-models/cuisine');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLSchema,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
} = graphql;

const RecipeType = new GraphQLObjectType({
    name: 'recipes',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        ingredients: {
            type: new GraphQLList(GraphQLString)
        }
    })
});

const CuisineType = new GraphQLObjectType({
    name: 'cuisines',
    fields: () => ({
        _id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        }
    })
});

const RootQuery = new GraphQLObjectType({
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
                return Recipe.findById(args.id)
            }
        },
        recipes: {
            type: new GraphQLList(RecipeType),
            resolve(parent, args) {
                return Recipe.find({});
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
                return Cuisine.findById(args.id)
            }
        },
        cuisines: {
            type: new GraphQLList(CuisineType),
            resolve(parent, args) {
                return Cuisine.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCuisine: {
            type: CuisineType,
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve(parent, args) {
                Cuisine.init()
                let cuisine = new Cuisine({
                    name: args.name
                })
                return cuisine.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});