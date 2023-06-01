/// <reference types="cypress"/>

describe('Validate Header', { testIsolation: false }, () => {
    it('Succesfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    })
    it('Succesfully validate body', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').its('name').should('eq', 'ditto')
    })

    it('Validate Status', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('status').should('equal', 200)
    })

    it('Validate status with pharam', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?pages=2&per_pages=1&delay=3',
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    })

    it('Validate Content', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').should('include', { name: "ditto" })
    })

    it('Validates Content Pokemon', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto') // Ganti URL dengan URL yang sesuai
            .its('body').then((response) => {
                expect(response.abilities[0].ability.name).to.eq('limber');
                expect(response.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/');
            });
    });
})