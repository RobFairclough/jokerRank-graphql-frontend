import { gql } from 'apollo-boost';

export const getUsers = gql`
  {
  users {
    name,
    id,
    email
  }
}
`;
export const placeholder = 'hello';
