const {
  performGraphQLMutation,
  performGraphQLQuery
} = require('../support/graphql-utils.js');

describe('GraphQL Mutation and Query Test', () => {
  it('should execute the GraphQL mutation to create data and update it', () => {
    const variables = {
      address: 'Athani',
      emailid: 'Amit@123',
    };
    var createdItemId;
    var updatedData;
    var currentvalue;

    const mutation = `
      mutation MyMutation($address: String!, $emailid: String!) {
        createArun(input: { address: $address, emailid: $emailid }) {
          id
        }
      }
    `;

    // Perform the create mutation
    cy.performGraphQLMutation(mutation, variables).then((response) => {
      createdItemId = response.createArun.id; // Extract the id from the response data
      cy.log('ID of the created item:', createdItemId);

      //  Construct and execute the update mutation
      const updateMutation = `
        mutation MyUpdateMutation($id: ID!, $address: String!, $emailid: String!) {
          updateArun(input: { id: $id, address: $address, emailid: $emailid }) {
            id
            address
            emailid
          }
        }
      `;

      const updatedVariables = {
        id: createdItemId,
        address: 'belagavi',
        emailid: 'arun@123',
      };
      
      cy.performGraphQLMutation(updateMutation, updatedVariables);
    }).then((updatedDataResponse) => {
      updatedData = updatedDataResponse.updateArun; // Extract the updated data from the response
      cy.log('Updated data:', updatedData);

      // Fetch the data using a query
      const query = `
        query MyQuery($id: ID!) {
          getArun(id: $id) {
            id
            address
            emailid
          }
        }
      `;

      const queryVariables = {
        id: createdItemId,
      };

       cy.performGraphQLQuery(query, queryVariables);
    }).then((fetchedData) => {
      currentvalue = fetchedData.getArun;
      cy.log('Fetched data:', currentvalue);

      //  Compare the fetched data with the updated data using assertions
      expect(currentvalue).to.deep.equal(updatedData);

      const deleteMutation = `
      mutation MyDeleteMutation($id: ID!) {
        deleteArun(input: { id: $id }) {
          id
        }
      }
    `;

      const deleteVariables = {
        id: createdItemId,
      };
      cy.wait(10000)
      cy.performGraphQLMutation(deleteMutation, deleteVariables).then(() => {
        cy.log('Item deleted successfully.');
      })
    });
  });
});