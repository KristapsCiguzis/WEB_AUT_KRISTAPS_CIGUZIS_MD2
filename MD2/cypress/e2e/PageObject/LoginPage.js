import BasePage from "./BasePage";

class LoginPage extends BasePage {
  typeUsername(value) {
    cy.get("#txt-username").type(value);
  }

  typePassword(value) {
    cy.get("#txt-password").type(value);
  }

  clickLogin() {
    cy.get("#btn-login").click();
  }
}

export default new LoginPage();
