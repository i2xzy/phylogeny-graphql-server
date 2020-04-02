import { gql } from 'apollo-server';

export default gql`
  type Clade {
    id: ID
    name: String
    rank: String
    extant: Boolean
    children: [Clade]
    hasChildren: Boolean
    leaves: Int
    synonyms: [String]
    lineage: [Clade]
  }
`;
