/// <reference types="cypress-data-session" />

export function setToken() {
    cy.task('gettoken')
        .then((token) =>{
            if (token === null) {
                //fakelogwanie
                cy.log('save')
                cy.task('savetoken', 'tokentrue')
                //window.localStorage.setItem('dtk', resp.body.access_token);
                window.localStorage.setItem('dtk','tokentrue');
            }
            else
            {
                cy.log('load')
                window.localStorage.setItem('dtk', token)
            }
        });
}