/// <reference types="cypress" />

beforeEach( () => {

  cy
    .server()

  cy
    .route('GET', '/todos')
    .as('getTodos')

  cy
    .route('POST', '/todos')
    .as('todoCreate')

  cy
    .visit('localhost:3000');

});

it('has no elements', () => {

  cy
    .wait('@getTodos')

  cy
    .get('.todo')
    .should('have.length', 0);

});

it.only('adds an item to the list', () => {

  cy
    .get('.new-todo')
    .type('wash dishes{enter}');

  cy
    .wait('@todoCreate')
    .then( todo => {

      expect(todo.status).to.eq(201)
      expect(todo.request.body.title).to.eq('wash dishes')
      expect(todo.response.body.title).to.eq('wash dishes')
      expect(todo.response.body.completed).to.be.false

    })

});