import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import typeDefs from './models/typeDef.js';
import resolvers from './models/resolver.js';

const MONGO_URI = "mongodb://localhost:27017/alpha-test";
// const mongo_options : mongoose.ConnectOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }
// Database connection
mongoose
  .connect(MONGO_URI, /*mongo_options*/)
  .then(() => {
    console.log(`Db Connected`);
  })
  .catch(err => {
    console.log(err.message);
  });

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);