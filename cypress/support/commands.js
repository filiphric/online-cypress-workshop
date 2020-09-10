Cypress.Commands.add('addTodo', (input) => {

  cy
    .get('.new-todo')
    .type( input + '{enter}');

})