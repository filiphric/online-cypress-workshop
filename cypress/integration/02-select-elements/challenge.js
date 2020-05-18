/// <reference types="cypress" />
/* 

  ⚠️ before you start this challenge, please create at least one todo item
  💡 there is a LOT that can be learned about selectors, I recommend
  looking into W3Schools https://www.w3schools.com/cssref/css_selectors.asp

*/

it('gets element on page', () => {

  cy
    .visit('localhost:3000');

  // 👶 challenge #1: select a todo element using tag "li" (list item)
  cy
    .get('#todo-list > li > div > label');
  
  // 👦 challenge #2: select a todo element using class
  cy
    .get('.todo');

  // 👨 challenge #3: select checkbox inside todo element by using class
  cy
    .get('.toggle');

  // 🤓 challenge #4: select checkbox inside todo element by using "checkbox" attribute
  cy
    .get('#todo-list > li > div > input');

  // 🦸‍♂️ challenge #5: select a todo element by relation (complete selector, don’t delete "ul")
  cy
    .get('#todo-list > li > div > label');
   
});