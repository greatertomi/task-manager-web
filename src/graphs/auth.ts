import { gql } from '@apollo/client';

export const SIGNUP_MUTATION = gql`
  mutation registerMutation($data: SignupInput!) {
    signUp(data: $data) {
      token
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;
