// <reference types="cypress" />
import { RecipeType } from '../../src/types/types';

const recipes = require('../fixtures/recipes.json');

describe('Manage Recipes', () => {
  beforeEach(() => {
    cy.visit('localhost:3001');
  });

  // Add a Recipe
  describe('Add a Recipe', () => {
    it('routes to the add page', () => {
      cy.getByTestId('add-new-recipe-button').click();
      cy.url().should('include', '/add');
    });

    it('adds a recipe', () => {
      const recipe: RecipeType = recipes[0];
      cy.addrecipe(recipe);
      cy.contains(recipes[0].title).should('exist');
      cy.contains(recipes[0].description).should('exist');

      cy.getByTestId('recipe-image')
        .last()
        .should('have.attr', 'src')
        .should('not.include', '/images/recipes/defaultrecipe.jpeg');
    });

    it('wont add a recipe if input is invalid', () => {
      // Visit the add page
      cy.getByTestId('add-new-recipe-button').click();

      // Submit form
      cy.getByTestId('save-recipe-button').click();

      // Assert that the recipe was not added
      cy.contains('Your Recipe Has Been Added!').should('not.exist');
      cy.url().should('include', '/add');
    });
  });

  // Delete a Recipe
  describe('Delete a Recipe', () => {
    it('deletes a recipe', () => {
      // Delete recipe
      cy.contains(recipes[0].title)
        .parent()
        .parent()
        .within(() => {
          cy.getByTestId('trash-icon').click();

          // Assert that the user confirms the deletion
          cy.contains('Are you sure you want to delete this recipe?').should(
            'exist'
          );
          cy.contains('Yes').click();
        });

      // Assert that the recipe was deleted
      cy.contains(recipes[0].title).should('not.exist');
    });
  });

  // Edit a Recipe
  describe('Edit a Recipe', () => {});

  // View a Recipe
  describe('View a Recipe', () => {});
});
