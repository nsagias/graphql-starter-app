import { ApolloClient, InMemoryCache, from, createHttpLink } from '@apollo/client';
import { onError } from "@apollo/client/link/error";

export const link = createHttpLink({
  uri: "http://localhost:8000/graphql"
});

const client = new ApolloClient({
  link: from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
        if (networkError) console.log(`[Network error]: ${networkError}`);
      }
    }),
      link
    ]),

    cache: new InMemoryCache(),
});


export default client;

