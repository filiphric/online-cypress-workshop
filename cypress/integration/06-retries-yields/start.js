/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('Should have todo item with text "create a list of todos"', () => {

  cy
    .get('.todo')
    .contains('todos')

  cy
    .contains('todos')

});

it('Should have todo item with text "buy milk"', () => {

  cy
    .get('.todo-list')
    .find('li')
    .eq(1)
    .should('contain.text', 'buy milk')

});

it.only('Should have one todo item', () => {

  cy
    .get('.todo', {timeout: 60000})
    .should('have.length', 1);

});