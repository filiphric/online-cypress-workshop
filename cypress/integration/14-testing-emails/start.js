beforeEach(() => {

  cy
    .request('DELETE', 'localhost:3000/accounts');

});

it('sends a welcome email', () => {

  cy
    .visit('localhost:3000/signup');

  cy
    .get('[type=\'email\']')
    .type('short-open.qk80nst0@mailosaur.io');

  cy
    .get('[type=\'password\']')
    .type('aaaaa');

  cy
    .contains('Send me a welcome email')
    .prev()
    .check();

  cy
    .get('.signup-button')
    .click();

  cy
    .request({
      url: 'https://mailosaur.com/api/messages/await?server=qk80nst0',
      method: 'POST',
      body: {
        "sentTo": "short-open.qk80nst0@mailosaur.io"
      },
      headers: {
        authorization: 'Basic ' + Buffer.from('c8ZaRp5EnAt0LEX').toString('base64')
      }
    }).then( message => {

      expect(message.body.html.links[0].href).to.eq('https://www.youtube.com/channel/UCDOCAVIhSh5VpJMEfdak1OA');

    })

});