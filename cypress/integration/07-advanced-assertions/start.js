/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('Checks text of todo item', () => {

  cy
    .get('.todo')
    .then( todos => {

      expect(todos).to.contain.text('buy milk')

    })

    // .should('contain.text', 'buy milk');

});

it('Checks texts of all todo items', () => {

  cy
    .get('.todo')
    .then( item => {

      expect(item[0]).to.contain.text('buy milk')
      expect(item[1]).to.contain.text('wash dishes')

    })

});

it('Has first todo item with text "wash dishes"', () => {

  cy
    .get('.todo')
    .should('have.length', 2)
    .eq(0)
    .should('contain.text', 'wash dishes');

});

it.only('Has first todo item with text "wash dishes" (solution 2)', () => {

  cy
    .get('.todo')
    .should( item => {

      console.log(item[0])
      expect(item[0]).to.contain.text('buy milk')
      expect(item[1]).to.contain.text('wash dishes')

    })

});