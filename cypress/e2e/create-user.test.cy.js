
describe('Add a new User', { testIsolation: false }, () => {
  it('Add a new user', () => {

    var user = {
      "name": 'Fathur Rohim',
      "job": 'Test Engineer'
    }
    cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
      expect(response.status).equal(201)

      cy.request('GET', `https://reqres.in/api/users/${response.body.id}`).then((getResponse) => {
        expect(getResponse.status).to.equal(200);
        expect(getResponse.body.data.name).to.equal(user.name);
        expect(getResponse.body.data.job).to.equal(user.job);
      });
    });
  });
});

