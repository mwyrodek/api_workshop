// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setAuthToken', (username = Cypress.env('login'), password = Cypress.env('password')) => {
  cy.log("I AM IN LOGIN COMMAND")
  if (Cypress.env('token') === undefined) {
    cy.log("I AM REQUESTING NEW TOKEN")
    cy.request('POST', '/wp-json/jwt-auth/v1/token', { username, password })
      .then((resposne) => {
        Cypress.env('token', resposne.body.data.token);
      });
  }
});

Cypress.Commands.add('sendRequestWithAuth', (requestbody, requestmethod ='POST') => {
   cy.request({
    url: '/wp-json/jwt-auth/v1/token/validate',
    method: requestmethod,
    headers: {
      authorization: `Bearer ${Cypress.env('token')}`,
    },
    body: requestbody,
    failOnStatusCode: false,
  })
});
