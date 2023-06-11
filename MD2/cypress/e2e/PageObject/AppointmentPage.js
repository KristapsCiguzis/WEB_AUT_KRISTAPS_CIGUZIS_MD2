import BasePage from "./BasePage";

class AppointmentPage extends BasePage {
  selectFacility(value) {
    cy.get("#combo_facility").select(value);
  }

  checkHospitalReadmission() {
    cy.get("#chk_hospotal_readmission").click();
  }

  selectMedicaid() {
    cy.get("#radio_program_medicare").click();
  }

  typeComment(value) {
    cy.get("#txt_comment").type(value);
  }

  typeVisitDate(value) {
    cy.get("#txt_visit_date").should("be.visible").click().type(value);
  }

  bookAppointment() {
    cy.get("#btn-book-appointment").click();
  }
}

export default new AppointmentPage();
