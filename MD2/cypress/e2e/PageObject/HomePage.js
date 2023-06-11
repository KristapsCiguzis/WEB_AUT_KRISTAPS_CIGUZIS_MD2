import BasePage from "./BasePage";

class HomePage extends BasePage {
  get url() {
    return "https://katalon-demo-cura.herokuapp.com/";
  }

  makeAppointment() {
    cy.get("#btn-make-appointment").click();
  }
}

export default new HomePage();
