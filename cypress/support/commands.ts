/// <reference types="cypress" />
import 'cypress-file-upload';
import { RecipeType } from '../../src/types/types';

// ***********************************************
// This file is where you will create Custom
// commands and overwrite existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('addrecipe', (recipe: RecipeType) => {
  cy.get('[data-testid="add-new-recipe-button"]').click();

  // Insert recipe data
  cy.get("input[name='title']").type(recipe.title);
  cy.get("input[name='link']").type(recipe.link);
  cy.get('input[type="file"]').attachFile('images/pancakes.jpg');
  cy.get("input[name='prepTime']").type(recipe.prepTime);
  cy.get("input[name='cookTime']").type(recipe.cookTime);
  cy.get("input[name='servings']").type(recipe.servings);
  cy.get("textarea[name='description']").type(recipe.description);
  cy.get("textarea[name='ingredients']").type(recipe.ingredients.join('\n'));
  cy.get("textarea[name='instructions']").type(recipe.instructions.join('\n'));
  // Submit form
  cy.get('[data-testid="save-recipe-button"]').click();

  // Assert that the recipe was added
  cy.contains('Your Recipe Has Been Added!').should('exist');

  // Assert that the recipe was added to the home page
  cy.contains(/Back To Recipes/i).click();
});

Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
});

declare global {
  namespace Cypress {
    interface Chainable {
      addrecipe(recipe: RecipeType): Chainable<void>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
