// const fetch = require('node-fetch');

// const GRAPHQL_ENDPOINT = 'https://brpn4skrrravzkpyhyl7bs7cni.appsync-api.ap-south-1.amazonaws.com/graphql';
// const GRAPHQL_API_KEY = 'da2-2vp4ickuxzbf7lgvlo7o7jkq24';

// Cypress.Commands.add('performGraphQLMutation', (mutation, variables = {}) => {
//   const requestBody = {
//     query: mutation,
//     variables: variables,
//   };

//   return cy.request({
//     method: 'POST',
//     url: GRAPHQL_ENDPOINT,
//     headers: {
//       'x-api-key': GRAPHQL_API_KEY,
//       'Content-Type': 'application/json',
//     },
//     body: requestBody,
//   }).then((response) => {
//     return response.body.data; // Return the entire response data
//   });
// });
const fetch = require('node-fetch');

const GRAPHQL_ENDPOINT = 'https://brpn4skrrravzkpyhyl7bs7cni.appsync-api.ap-south-1.amazonaws.com/graphql';
const GRAPHQL_API_KEY = 'da2-2vp4ickuxzbf7lgvlo7o7jkq24';

Cypress.Commands.add('performGraphQLMutation', (mutation, variables = {}) => {
  const requestBody = {
    query: mutation,
    variables: variables,
  };

  return cy.request({
    method: 'POST',
    url: GRAPHQL_ENDPOINT,
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json',
    },
    body: requestBody,
  }).then((response) => {
    return response.body.data; // Return the entire response data
  });
});

Cypress.Commands.add('performGraphQLQuery', (query, variables = {}) => {
  const requestBody = {
    query: query,
    variables: variables,
  };

  return cy.request({
    method: 'POST',
    url: GRAPHQL_ENDPOINT,
    headers: {
      'x-api-key': GRAPHQL_API_KEY,
      'Content-Type': 'application/json',
    },
    body: requestBody,
  }).then((response) => {
    return response.body.data; // Return the entire response data
  });
});
