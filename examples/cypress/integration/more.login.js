import { expect } from 'chai';

describe('Login Test', () => {
    let token;
    beforeEach(() => {
      cy.setAuthToken().then(() => {
        token = Cypress.env('token');
      });
    });
  
    it('Validate', () => {
      cy.log(Cypress.env('token'));
      cy.request({
        url: '/wp-json/jwt-auth/v1/token/validate',
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
       
        failOnStatusCode: false,
      })
        .then((resposne) => {
          expect(resposne.status).to.eql(200);
        });
    });
  
    it('Validate2', () => {
      cy.log(Cypress.env('token'));
      cy.request({
        url: '/wp-json/jwt-auth/v1/token/validate',
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        failOnStatusCode: false,
      })
        .then((resposne) => {
          expect(resposne.status).to.eql(200);
        });
    });
    /*
      /*
  
              const response = await request.post("/wp-json/jwt-auth/v1/token/validate")
                  .set('Authorization', 'Bearer ' + token).send();
  
              expect(response.status).to.eql(200);
       */
  });