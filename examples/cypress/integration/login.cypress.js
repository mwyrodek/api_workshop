import { expect } from 'chai';

describe('Login Test', () => {
  const token = null;

  it('Valid Login', () => {
    cy.request('POST', '/wp-json/jwt-auth/v1/token', { username: Cypress.env('login'), password: Cypress.env('password') })
      .then((resposne) => {
        expect(resposne.status).to.eql(200);
        expect(resposne.body.data.token.length).to.greaterThan(30);
      });
  });

  it('Invalid Login', () => {
    cy.request({
      url: '/wp-json/jwt-auth/v1/token',
      method: 'POST',
      failOnStatusCode: false,
    }, { username: Cypress.env('login'), password: 'Ancient' })
      .then((resposne) => {
        expect(resposne.status).to.eql(403);
      });
  });
});


