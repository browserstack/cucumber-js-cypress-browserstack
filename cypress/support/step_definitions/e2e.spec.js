const { Given, Then, And } = require("cypress-cucumber-preprocessor/steps");

require("cypress-xpath");

import Login from "../pages/login.page";
import Purchase from "../pages/purchase.page";
import Orders from "../pages/orders.page";

const login = new Login();
const purchase = new Purchase();
const orders = new Orders();

Given("I navigate to website", () => {
  cy.visit(Cypress.config().baseUrl + "signin");
});

And("I SignIn as {string} with {string} password", (username, password) => {
  login
    .username()
    .should("be.visible")
    .click({ force: true })
    .type(username + "{enter}");
  login
    .password()
    .click({ force: true })
    .type(password + "{enter}");
  login.logInButton().click();
});
And("I add three products to cart", () => {
  purchase.item1().click({ force: true });
  purchase.item2().click({ force: true });
  purchase.item3().click({ force: true });
});
And("I click on Buy Button", () => {
  purchase.buyButton().click({ force: true });
});
And(
  "I enter shipping details {string}, {string}, {string}, {string} and {string}",
  (first, last, address, province, pincode) => {
    cy.get("#firstNameInput").type(first);
    cy.get("#lastNameInput").type(last);
    cy.get("#addressLine1Input").type(address);
    cy.get("#provinceInput").type(province);
    cy.get("#postCodeInput").type(pincode);
  }
);
And("I click on Checkout Button", () => {
  orders.checkout().click();
  cy.contains("Continue ").click();
});
And("I click on {string} link", (link) => {
  cy.contains(link).click();
});
Then("I should see elements in list", () => {
  cy.xpath("/html/body/div/main/div/div/div/div[2]/div/div[2]")
    .children("div")
    .should("have.length", 3);
});
