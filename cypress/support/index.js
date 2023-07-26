
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  URL: 'http://localhost:3000/graphql', 
  cache: new InMemoryCache(),
});

Cypress.Commands.add('graphql', (query, variables) => {
  return client.query({
    query,
    variables,
  });
});
