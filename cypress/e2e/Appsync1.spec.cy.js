describe('GraphQL Tests', () => {
  it('should query data using GraphQL', () => {
    var id = '123'
    const query =
      `mutation MyMutation {
         createCodeimprove(input: {$emailid:: String!, $name:: String!}) {
         emailid
          id
          name
        } 
      }
        id
      }
    }`;
    const variables = {
      name: 'captain',
      emailid: 'marvel@123'
    };

    cy.performGraphQLQuery(query, variables).then((data) => {
      // expect(data.createCodeimprove.id).to.exist;
    })
  });
});