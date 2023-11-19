import { gql } from '@apollo/client';

export const CENSOR_MEDIA = gql`
  mutation mediaCensor($input: MediaInput!) {
    mediaCensor(input: $input) {
      status
    }
  }
`;

export const VALID_MEDIA = gql`
  mutation mediaValid($input: MediaInput!) {
    mediaValid(input: $input) {
      status
    }
  }
`;
