import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';

import TreeAPI from './data/tree';
import UserAPI from './data/user';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    token: req.headers.authorization || ''
  }),
  dataSources: () => ({
    treeAPI: new TreeAPI(),
    userAPI: new UserAPI()
  }),
  engine: {
    apiKey: process.env.ENGINE_API_KEY
  },
  introspection: true,
  playground: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
