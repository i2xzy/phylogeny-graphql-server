import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    tree(id: ID, depth: Int): Tree
    clade(id: ID!): Clade
    # me: User
  }

  #type Mutation {
  # upsertClade(id: ID, data: JSON): ID
  # login(email: String): String # token
  #}

  type Tree {
    total: Int
    depth: Int
    root: Clade
  }

  type Clade {
    id: ID
    name: String
    otherNames: String
    description: String
    extant: Boolean
    parentId: ID
    parent: Clade
    children: [Clade]
    hasChildren: Boolean
    assets: [Asset]
  }

  type Asset {
    name: String
    folder: String
    isDefault: Boolean
  }
`;

export default typeDefs;
