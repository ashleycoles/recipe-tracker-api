const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose').set('debug', true);

mongoose.connect('mongodb://root:password@localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'recipe-tracker'
})

mongoose.connection.once('open', () => {
    console.log('connected to database');
})

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: require('./schema.js'),
    graphiql: true
}))

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');