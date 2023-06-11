
import AppointmentPage from "./PageObject/AppointmentPage";
import BasePage from "./PageObject/BasePage";
import ConformationPage from "./PageObject/ConformationPage";
import HistoryPage from "./PageObject/HistoryPage";
import HomePage from "./PageObject/HomePage";
import LoginPage from "./PageObject/LoginPage";



describe("Implement the following scenarios:", () => {
  beforeEach(() => {
  //  cy.visit("https://katalon-demo-cura.herokuapp.com/");
   // cy.get("#btn-make-appointment").click();
  // cy.get("#txt-username").type("John Doe");
   // cy.get("#txt-password").type("ThisIsNotAPassword");
    //cy.get("#btn-login").click();

    HomePage.visit();
    HomePage.makeAppointment();
    LoginPage.typeUsername("John Doe");
    LoginPage.typePassword("ThisIsNotAPassword");
    LoginPage.clickLogin();

  });

  it("Scenario 1 - Make an Appointment", () => {
    // 1. Facility - Seoul CURA Healthcare Center
   // cy.get("#combo_facility").select("Seoul CURA Healthcare Center");
    // 2. Check - Apply for hospital readmission
   // cy.get("#chk_hospotal_readmission").click();
    // 3. Select - Medicaid
  //  cy.get("#radio_program_medicare").click();

  //  cy.get("#txt_comment").type("CURA Healthcare Service");
  //  cy.get("#txt_visit_date").should("be.visible").click().type("11/06/2023");
  //  cy.get("#btn-book-appointment").click();

 //   cy.get("h2").should("have.text", "Appointment Confirmation");
 //   cy.get("#facility").should("have.text", "Seoul CURA Healthcare Center");
//    cy.get("#hospital_readmission").should("have.text", "Yes");
//   cy.get("#visit_date").should("have.text", "11/06/2023");
 //   cy.get("#program").should("have.text", "Medicare");
  //  cy.get("#comment").should("have.text", "CURA Healthcare Service");

  AppointmentPage.selectFacility("Seoul CURA Healthcare Center");
    AppointmentPage.checkHospitalReadmission();
    AppointmentPage.selectMedicaid();
    AppointmentPage.typeComment("CURA Healthcare Service");
    AppointmentPage.typeVisitDate("11/06/2023");
    AppointmentPage.bookAppointment();

    ConformationPage.verifyAppointmentDetails({
      facility: "Seoul CURA Healthcare Center",
      hospitalReadmission: "Yes",
      visitDate: "11/06/2023",
      program: "Medicare",
      comment: "CURA Healthcare Service",
    });

  });

  it("Scenario 2 - Appointment history empty", function () {
   // cy.get("#menu-toggle").click();
  //  cy.contains("History").click();
   // cy.get(".panel-body").should("not.exist");
    HistoryPage.clickMenuToggle();
    HistoryPage.verifySidebarActive();
    HistoryPage.clickHistory();
    HistoryPage.verifyNoAppointmentMessage();
  });
  });

