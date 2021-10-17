/// <reference types="Cypress" /> 

describe('weigh-in area', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.contains('li.main-header__item a', 'Weigh-ins').click();
    });



    it('should show title', () => {
        cy.contains('h1', 'Weigh-in!').should('be.visible');
    });
})

