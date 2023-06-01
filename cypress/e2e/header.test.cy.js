/// <reference types="cypress"/>

describe('Validate Header',{testIsolation:false}, () => {
    it('Succesfully validate content-type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include','application/json; charset=utf-8')
    })
    it('Succesfully validate body',() => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').its('name').should('eq','ditto')
    })
})
