/// <reference types="cypress" />

it('adds a new todo item', () => {

  cy
    .visit('localhost:3000')

  cy
    .get('input')
    .type('new todo{enter}')

});

it('completes todo item', () => {

  cy
    .visit('localhost:3000')

  cy
    .get('.toggle')
    .click()

});

it.only('deletes todo item', () => {

  cy
    .visit('localhost:3000')

  cy
    .get('.destroy')
    .click({force: true})

});