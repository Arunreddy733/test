// cypress/integration/graphql.spec.js
const { performGraphQLQuery } = require('../support/commands.js');

describe('GraphQL Tests', () => {
  it('should query data using GraphQL', async () => {
    const query = `
      query MyQuery {
        getCodeimprove(id:"01") {
          name
          id
          emailid
        }
      }
    `;

    try {
      const data = await performGraphQLQuery(query);
      expect(data.getCodeimprove.name).to.equal('jitendra');
      expect(data.getCodeimprove.emailid).to.equal('arun@123');
    } catch (error) {
      // Handle any errors that occurred during the GraphQL query
      throw error;
    }
  });
});
