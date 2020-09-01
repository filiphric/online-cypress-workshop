/// <reference types="cypress" />

beforeEach( () => {

  cy
    .request('POST', 'localhost:3000/accounts/seed', [
      {
        'email': 'admin@cypress-workshop.com',
        'password': 'admin'
      }
    ]);

});

it.only('Logs in a user', () => {

  cy
    .visit('localhost:3000/login');

  cy
    .get('[type=\'email\']')
    .type('admin@cypress-workshop.com');

  cy
    .get('[type=\'password\']')
    .type('admin');

  cy
    .get('.login-button')
    .click();

  cy
    .get('#loginMessage')
    .should('be.visible')
    .should('contain.text', 'User is logged in');

});

it('is logged in', () => {

  cy
    .visit('localhost:3000');

  cy
    .get('#loginMessage')
    .should('be.visible')
    .should('contain.text', 'User is logged in');

});