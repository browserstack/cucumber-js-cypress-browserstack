const { Given, Then } = require("cypress-cucumber-preprocessor/steps");

Given("I navigate to local website", () => {
  cy.visit(Cypress.config().baseUrl);
});

Then("I should see sample local page", () => {
  cy.title().should("equal", "BrowserStack Local Website");
});
