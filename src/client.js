import { createHttpLink } from "apollo-link-http";
// caching
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient, gql } from "apollo-boost";

const GITHUB_BASE_URL = "https://api.graphqlplaceholder.com/";

const httpLink = createHttpLink({
  uri: GITHUB_BASE_URL,
//   headers: {
//     authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
//   }
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: httpLink,
  cache
});

export default client;
