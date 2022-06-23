// <reference types="cypress" />
const recipes = require('../fixtures/recipes.json');

describe('Manage Recipes', () => {
  beforeEach(() => {
    cy.visit('localhost:3001');
  });

  // Add a Recipe
  describe('Add a Recipe', () => {
    it('routes to the add page', () => {
      cy.get('[data-testid="add-new-recipe-button"]').click();
      cy.url().should('include', '/add');
    });

    it('adds a recipe', () => {
      cy.get('[data-testid="add-new-recipe-button"]').click();

      // Insert recipe data
      cy.get("input[name='title']").type(recipes[0].title);
      cy.get("input[name='link']").type(recipes[0].link);
      cy.get('input[type="file"]').attachFile('images/pancakes.jpg');
      cy.get("input[name='prepTime']").type(recipes[0].prepTime);
      cy.get("input[name='cookTime']").type(recipes[0].cookTime);
      cy.get("input[name='servings']").type(recipes[0].servings);
      cy.get("textarea[name='description']").type(recipes[0].description);
      cy.get("textarea[name='ingredients']").type(
        recipes[0].ingredients.join('\n')
      );
      cy.get("textarea[name='instructions']").type(
        recipes[0].instructions.join('\n')
      );

      // Submit form
      cy.get('[data-testid="save-recipe-button"]').click();

      // Assert that the recipe was added
      cy.contains('Your Recipe Has Been Added!').should('exist');

      // Assert that the recipe was added to the home page
      cy.contains(/Back To Recipes/i).click();
      cy.contains(recipes[0].title).should('exist');
      cy.contains(recipes[0].description).should('exist');

      cy.get('[data-testid="recipe-image"]')
        .last()
        .should('have.attr', 'src')
        .should('not.include', '/images/recipes/defaultrecipe.jpeg');
    });

    it('wont add a recipe if input is invalid', () => {
      // Visit the add page
      cy.get('[data-testid="add-new-recipe-button"]').click();

      // Submit form
      cy.get('[data-testid="save-recipe-button"]').click();

      // Assert that the recipe was not added
      cy.contains('Your Recipe Has Been Added!').should('not.exist');
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
