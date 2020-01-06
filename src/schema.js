import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    tree(id: ID, depth: Int): Tree
    clade(id: ID!): Clade
    search(value: String!): [SearchResult]
    users: [User]
    user(id: ID!): User
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

  type SearchResult {
    id: ID
    name: String
  }

  type User {
    id: ID
    username: String
    email: String
    password: String
    title: String
    firstName: String
    lastName: String
    address: String
    postcode: String
    phone: String
    dateOfBirth: String
    gender: String
    coverLetter: String
    created: String
    role: Role
    referenceCode: String
    subscribed: Boolean
    isActive: Boolean
    isConfirmed: Boolean
    modified: Boolean
  }

  type Role {
    id: ID!
    description: String
  }
`;

export default typeDefs;
