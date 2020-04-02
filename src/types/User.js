import { gql } from 'apollo-server';

export default gql`
  input UserInput {
    roleId: ID
    title: String
    firstName: String
    lastName: String
    username: String!
    password: String
    address: String
    postcode: String
    phone: String
    email: String!
    dateOfBirth: String
    gender: String
    subscribed: Boolean
    coverLetter: String
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
    id: ID
    description: String
  }
`;
