import { gql } from '@apollo/client';

export const GET_NEXT_MODERATION_TASK = gql`
  query GetNextModerationTask {
    moderation {
      nextTask {
        media {
          id
          thumbnailURL
          embedURL
          categor
          description
          channel {
            name
            description
          }
        }
      }
    }
  }
`;
