import BasePage from "./BasePage";

class ConformationPage extends BasePage {
  verifyAppointmentDetails(details) {
    cy.get("h2").should("have.text", "Appointment Confirmation");
    cy.get("#facility").should("have.text", details.facility);
    cy.get("#hospital_readmission").should("have.text", details.hospitalReadmission);
    cy.get("#visit_date").should("have.text", details.visitDate);
    cy.get("#program").should("have.text", details.program);
    cy.get("#comment").should("have.text", details.comment);
  }
}

export default new ConformationPage();
