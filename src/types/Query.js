import { gql } from 'apollo-server';

export default gql`
  type Query {
    tree(id: ID, depth: Int): Clade
    clade(id: ID!): Clade
    search(value: String!): [SearchResult]
    users: [User]
    user(id: ID!): User
  }

  type SearchResult {
    id: ID
    name: String
  }
`;
