/// <reference types="cypress"/>

describe('Delete user', () => {
    it('Succesfully deleted',() => {
        cy.request('DELETE','https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)
        })
    })
})