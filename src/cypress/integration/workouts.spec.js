/// <reference types="Cypress" />

describe('workouts area', () => {
    beforeEach(() => {
        cy.visitArea('Workouts');
    });
        
    it('should show under construction message', () => {
        cy.contains('h1', 'This page is under construction').should('be.visible');
    });


});