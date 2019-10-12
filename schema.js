const fetch = require('node-fetch');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql');

const CladeType = new GraphQLObjectType({
  name: 'Clade',
  description: '...',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: json => json._id
    },
    name: {
      type: GraphQLString,
      resolve: json => json.name
    },
    extant: {
      type: GraphQLBoolean,
      resolve: json => json.extant
    },
    parent: {
      type: GraphQLString,
      resolve: json => json.parent
    },
    children: {
      type: new GraphQLList(CladeType),
      resolve: json => json.children
    }
  })
});

const TreeType = new GraphQLObjectType({
  name: 'Tree',
  description: '...',
  fields: () => ({
    total: {
      type: GraphQLInt,
      resolve: json => json.total
    },
    depth: {
      type: GraphQLInt,
      resolve: json => json.depth
    },
    root: {
      type: CladeType,
      resolve: json => json.root
    }
  })
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',
    fields: () => ({
      tree: {
        type: TreeType,
        args: {
          id: {
            type: GraphQLString
          },
          depth: {
            type: GraphQLInt
          }
        },
        resolve: (root, args) =>
          fetch(
            `https://tree.phylogenyexplorerproject.com/clades/tree/${args.id}/depth/${args.depth}`
          ).then(response => response.json())
      }
    })
  })
});
