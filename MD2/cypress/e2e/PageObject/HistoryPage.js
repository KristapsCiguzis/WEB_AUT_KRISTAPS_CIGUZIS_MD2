import BasePage from "./BasePage";

class HistoryPage extends BasePage {
  clickMenuToggle() {
    cy.get("#menu-toggle").click();
  }
  verifySidebarActive() {
    cy.get("#sidebar-wrapper").should("have.class", "active");
  }  

  clickHistory() {
    cy.contains("History").click();
  }

  verifyNoAppointmentMessage() {
    cy.contains("No appointment").should("be.visible");
  }
}

export default new HistoryPage();
