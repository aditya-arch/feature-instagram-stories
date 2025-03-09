// cypress/e2e/stories.cy.ts
describe('Instagram Stories', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('opens story viewer when clicking preview', () => {
      cy.get('.story-preview').first().click();
      cy.get('.story-viewer-overlay').should('be.visible');
    });
  
    it('navigates between stories', () => {
      cy.get('.story-preview').first().click();
      cy.get('.story-image').should('have.attr', 'src', 'test1.jpg');
      cy.get('.story-viewer-overlay').click('right');
      cy.get('.story-image').should('have.attr', 'src', 'test2.jpg');
    });
  });