// <reference types="cypress" />

describe('Manage Recipes', () => {
  beforeEach(() => {
    cy.visit('localhost:3001');
  });

  // Add a Recipe
  describe('Add a Recipe', () => {
    it('routes to the add page', () => {
      cy.contains(/Add/i).click();
      cy.url().should('include', '/add');
    });
  });

  // Delete a Recipe
  describe('Delete a Recipe', () => {});

  // Edit a Recipe
  describe('Edit a Recipe', () => {});

  // View a Recipe
  describe('View a Recipe', () => {});
});
