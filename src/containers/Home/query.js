import { gql } from "apollo-boost";
const GET_POST = gql`
query {
  posts {
    id
    title
    body
    author {
      id
      name
    }
  }
}
`;

export default GET_POST