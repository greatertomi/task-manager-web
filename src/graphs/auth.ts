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

export const LOGIN_MUTATION = gql`
  mutation loginMutation($data: LoginInput!) {
    login(data: $data) {
      ... on LoginSuccess {
        token
        user {
          id
          firstName
          lastName
          email
        }
      }
      ... on LoginError {
        code
        message
      }
    }
  }
`;
