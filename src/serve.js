import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';

import TreeAPI from './data/tree';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    treeAPI: new TreeAPI()
  }),
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  }
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
