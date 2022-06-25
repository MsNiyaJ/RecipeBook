// <reference types="cypress" />
import { RecipeType } from '../../src/types/types';

const recipes: RecipeType[] = require('../fixtures/recipes.json');

// This test file will only pass if you run all of them in order.
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
      cy.addRecipe(recipe);
      cy.contains(recipes[0].title).should('exist');
      cy.contains(recipes[0].description).should('exist');

      cy.getByTestId('recipe-image')
        .last()
        .should('have.attr', 'src')
        .should('not.include', '/images/recipes/defaultrecipe.jpeg');
    });

    it('wont add a recipe if fields are missing', () => {
      // Visit the add page
      cy.getByTestId('add-new-recipe-button').click();

      // Submit form
      cy.getByTestId('save-recipe-button').click();

      // Assert that the recipe was not added
      cy.contains('Your Recipe Has Been Added!').should('not.exist');
      cy.url().should('include', '/add');
    });
  });

  // Find a Recipe
  describe('Find a Recipe', () => {
    it('can search for recipe by name', () => {
      cy.getByTestId('search-bar').type(recipes[0].title);
      cy.getByTestId('recipes-list').within(() => {
        cy.contains(recipes[0].title).should('exist');
      });
    });
  });

  // View a Recipe
  describe('View a Recipe', () => {
    it('routes to the view page', () => {
      cy.getByTestId('eye-icon').last().click();
      cy.url().should('include', '/view');
    }).timeout(5000);

    it('views a recipe', () => {
      cy.getByTestId('eye-icon').last().click();
      cy.contains(recipes[0].servings).should('exist');
      cy.contains(recipes[0].prepTime).should('exist');
      cy.contains(recipes[0].cookTime).should('exist');
      cy.contains(recipes[0].title).should('exist');
      cy.contains(recipes[0].ingredients[0]).should('exist');
      cy.contains(recipes[0].instructions[0]).should('exist');
    });
  });

  // Edit a Recipe
  describe('Edit a Recipe', () => {
    it('routes to the edit page', () => {
      cy.getByTestId('pencil-icon').last().click();
      cy.url().should('include', '/edit');
    });

    it('edits a recipe', () => {
      const newDescription: string = 'Simple ingredients made from scratch';
      const originalDescription: string = recipes[0].description;

      // Assert that description is correct
      cy.getByTestId('recipe-description').last().contains(originalDescription);

      // Edit the last recipe
      cy.getByTestId('pencil-icon').last().click();
      cy.url().should('include', '/edit');

      // Clear the description box
      cy.get("textarea[name='description']").clear();

      // Edit recipe data
      cy.get("textarea[name='description']").type(newDescription);

      // Submit form
      cy.get("button[type='submit']").click();

      // Assert that the recipe was edited
      cy.contains('Your Recipe Has Been Edited!').should('exist');

      // Visit the home page, and assert that the recipe was edited
      cy.contains('Back to Recipes').click();
      cy.contains(newDescription).should('not.equal', originalDescription);
    });
  });

  // Delete a Recipe
  describe('Delete a Recipe', () => {
    it('deletes a recipe', () => {
      // Delete recipe
      cy.deleteRecipeByName(recipes[0]);

      // Assert that the recipe was deleted
      cy.contains(recipes[0].title).should('not.exist');
    });
  });
});
