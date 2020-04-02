import { gql } from 'apollo-server';

export default gql`
  type Mutation {
    root: String
    createUser(data: UserInput): MutationResponse
    updateUser(id: ID!, data: UserInput): MutationResponse

    # upsertClade(id: ID, data: JSON): ID
    # login(email: String): String # token
  }

  type MutationResponse {
    success: Boolean
  }
`;
