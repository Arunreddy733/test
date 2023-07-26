// integration/graphqlIntegration.spec.js
import { GET_USER } from '../graphqlQueries';

describe('GraphQL Integration Tests', () => {
  it('should fetch user details', () => {
    cy.graphql(GET_USER, { userId: '1' }).then((response) => {
      const user = response.data.user;
      // Perform assertions on the user object or response
      expect(user.id).to.equal('1');
      expect(user.name).to.equal('John Doe');
      expect(user.email).to.equal('john.doe@example.com');
    });
  });
});
// cy.request('http://localhost:3000/graphql', { 
//   method: 'POST',
//   body: {
//     query: '{ allTodos { id name } }',
//   },
// })
//   .then(response => {
//     // Assert on the response data
//     expect(response.body).to.have.property('data').to.have.property('allTodos');
//   });
