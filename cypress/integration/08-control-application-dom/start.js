/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('has a delete icon (solution 1)', () => {

  cy
    .get('.todo')
    .trigger('mouseover')

  cy
    .get('.destroy')
    .should('be.visible');

  cy
    .get('.todo')
    .trigger('mouseout')

  cy
    .get('.destroy')
    .should('not.be.visible');

});

it('has a delete icon (solution 2)', () => {

  cy
    .get('.destroy')
    .invoke('show')

});

it.only('has a link to application author', () => {

  cy
    .contains('Evan You')
    .invoke('removeAttr', 'target')

});
