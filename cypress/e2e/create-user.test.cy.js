
describe('Add a new User', { testIsolation: false }, () => {
  it('Add a new user', () => {

    var user = {
      "name": 'Fathur Rohim',
      "job": 'Test Engineer'
    }
    cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
      expect(response.status).equal(201)
      expect(response.body.name).to.equal(user.name);
      expect(response.body.job).to.equal(user.job);
    });
  });
});

