describe('GraphQL Test', () => {
    it('should send a GraphQL query', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:5000/graphql', // Replace with your GraphQL server URL
        body: {
          query: `
            query {
              getUser(id: 123) {
                id
                name
                email 
              }
            }
          `,
        },
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('getUser');
        const user = response.body.data.getUser;
        expect(user).to.have.property('id', 123);
        expect(user).to.have.property('name').and.to.be.a('string');
        expect(user).to.have.property('email').and.to.be.a('string');
      });
    });
  });