/// <reference types="Cypress" />

describe('first test', () => {
    it('should see the home page', () => {
        cy.visit("http://localhost:3000");
    });
    it('can navigate to the running page', () => {
        cy.contains('li.main-header__item a', 'Running').click();
    })
})