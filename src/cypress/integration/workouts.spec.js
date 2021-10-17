/// <reference types="Cypress" />

describe('workouts area', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.contains('li.main-header__item a', 'Workouts').click();
    });
        
    it('should show under construction message', () => {
        cy.contains('h1', 'This page is under construction').should('be.visible');
    });


});