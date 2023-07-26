const { performGraphQLMutation, performGraphQLQuery } = require('../support/commands.js');

describe('GraphQL Mutation and Query Test', () => {
  it('should execute the GraphQL mutation to create data', () => {
    const variables = {
      address: 'odi',
      emailid: 'pk',
    };
    const mutation = `
      mutation MyMutation($address: String!, $emailid: String!) {
        createArun(input: { address: $address, emailid: $emailid }) {
          address
          emailid
        }
      }
    `;

    cy.performGraphQLMutation(mutation, variables).then((data) => {
      cy.log('Created data:', data);

      const query = `
        query MyQuery($id: String!) {
          getArun(id: $id) {
            address
            emailid
          }
        }
      `;
      const fetchedVariables = {
        id: "c817646e-1ecd-4ad7-9db3-f8a2cd28b1da",
      };
      
      return cy.performGraphQLQuery(query, fetchedVariables).then((fetchedData) => {
        cy.log('Fetched data:', fetchedData);
        // Add any additional assertions on the fetchedData if needed
      });
    });
  });
});
