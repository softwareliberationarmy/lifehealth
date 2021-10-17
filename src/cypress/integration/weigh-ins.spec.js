/// <reference types="Cypress" /> 

describe('weigh-in area', () => {
    beforeEach(() => {
        cy.visitArea('Weigh-ins');
    });

    it('should show title', () => {
        cy.contains('h1', 'Weigh-in!').should('be.visible');
    });
})

