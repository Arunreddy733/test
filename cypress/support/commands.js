// // ***********************************************
// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
// //
// // -- This is a parent command --
// // Cypress.Commands.add('login', (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// // import { signInWithCognito } from "cypress-aws-cognito";

// // Cypress.Commands.add("signIn", () => {
// //   const username = "YOUR_COGNITO_USERNAME";
// //   const password = "YOUR_COGNITO_PASSWORD";
// //   signInWithCognito(username, password);
// // });
// cypress/support/graphql-utils.js
// const fetch = require('node-fetch');

// const GRAPHQL_ENDPOINT = 'https://fyi63dmhc5bwthur6rifat6o4q.appsync-api.ap-south-1.amazonaws.com/graphql';
// const GRAPHQL_API_KEY = 'da2-trmypwhe2fctzemoqj65ufntue';

// /**
//  * Perform a GraphQL query and return the response body
//  * @param {string} query The GraphQL query string
//  * @returns {Promise<any>} The parsed response body
//  */
// async function performGraphQLQuery(query) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'x-api-key': GRAPHQL_API_KEY,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ query }),
//   };

//   const response = await fetch(GRAPHQL_ENDPOINT, options);
//   const body = await response.json();

//   if (body.errors) {
//     throw new Error('GraphQL query returned errors');
//   }

//   return body.data;
// }

// Cypress.Commands.add('performGraphQLQuery', performGraphQLQuery);

// const fetch = require('node-fetch');

// const GRAPHQL_ENDPOINT = 'https://brpn4skrrravzkpyhyl7bs7cni.appsync-api.ap-south-1.amazonaws.com/graphql';
// const GRAPHQL_API_KEY = 'da2-2vp4ickuxzbf7lgvlo7o7jkq24';

// /**
//  * Perform a GraphQL query using Cypress and return the response body
//  * @param {string} query The GraphQL query string
//  * @returns {Cypress.Chainable<JSON>} The parsed response body
//  */
// Cypress.Commands.add('performGraphQLMutation', (mutation) => {
//   cy.request({
//     method: 'POST',
//     url: GRAPHQL_ENDPOINT,
//     headers: {
//       'x-api-key': GRAPHQL_API_KEY,
//       'Content-Type': 'application/json',
//     },
//        body: JSON.stringify({
//       query: mutation, 
//     }),
//     failOnStatusCode: false,
//   }).then((response) => {
//     expect(response.status).to.equal(200);
//     const data = response.body.data;
//     cy.log('created data:', data);
//   });
// });
// Cypress.Commands.add('performGraphQLQuery', (query) => {
//   cy.request({
//     method: 'POST',
//     url: GRAPHQL_ENDPOINT,
//     headers: {
//       'x-api-key': GRAPHQL_API_KEY,
//       'Content-Type': 'application/json',
//     },
//        body: JSON.stringify({
//       query: query, 
//     }),
//     failOnStatusCode: false,
//   }).then((response) => {
//     expect(response.status).to.equal(200);
//     const data = response.body.data;
//     cy.log('Fetched data:', data);
  
//   });
// });

const fetch = require('node-fetch');

const GRAPHQL_ENDPOINT = 'https://brpn4skrrravzkpyhyl7bs7cni.appsync-api.ap-south-1.amazonaws.com/graphql';
const GRAPHQL_API_KEY = 'da2-2vp4ickuxzbf7lgvlo7o7jkq24';

/**
 * Perform a GraphQL mutation using Cypress and return the response body
 * @param {string} mutation The GraphQL mutation string
 * @param {object} variables The variables for the mutation
 * @returns {Cypress.Chainable<JSON>} The parsed response body
 */
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
    const data = response.body.data;
    // cy.log('Created data:', data);
    return data;
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
    const data = response.body.data;
    // cy.log('Fetched data:', data);
    return data;
  });
});
