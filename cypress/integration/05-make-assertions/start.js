/// <reference types="cypress" />
// look into common assertions https://docs.cypress.io/guides/references/assertions.html#Common-Assertions

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it.only('Adds one item', () => {

  cy
    .get('.new-todo')
    .type('buy milk{enter}');

});

it('Adds two items', () => {

  // add first todo
  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  // add second todo
  cy
    .get('.new-todo')
    .type('wash dishes{enter}');
  
});

it('Marks item as completed', () => {

  cy
    .get('.new-todo')
    .type('buy milk{enter}');

  cy
    .contains('buy milk')
    .should('exist');

  cy
    .get('.toggle')
    .click();

});