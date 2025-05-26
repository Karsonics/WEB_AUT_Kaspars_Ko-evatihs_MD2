import { WebsiteHomePage } from "../PageObjects/WebsiteHomePage";
import { NavigationPage } from "../PageObjects/NavigationPage";
import { AppointmentPage } from "../PageObjects/AppointmentPage";
import { BasePage } from "../PageObjects/basePage";
import { LoginPage } from "../PageObjects/LoginPage";
import { ValidateInfoPage } from "../PageObjects/ValidateInfoPage";


describe("Appointment System", () => {
  beforeEach(() => {
    WebsiteHomePage.visit();
  });
  context("Make Appointment", () => {
    it("should allow user to successfully book an appointment", () => {
      
      WebsiteHomePage.appointmentButton().click();
      
      //login to the system
      LoginPage.usernameField().type("John Doe");
      LoginPage.passwordField().type("ThisIsNotAPassword");
      LoginPage.loginButton().click();


      
      AppointmentPage.selectFacility().select("Seoul CURA Healthcare Center");
      AppointmentPage.checkReadmission().click();
      AppointmentPage.medicaid().click();
      AppointmentPage.visitDate().click();
      AppointmentPage.datePickerDay("30").click();
      AppointmentPage.comment().type("CURA Healthcare Service");
      AppointmentPage.bookButton().click();

      // Verify appointment confirmation
      
      ValidateInfoPage.facilitycheck().should("contain",
      "Seoul CURA Healthcare Center");
      ValidateInfoPage.readmissionCheck().should("contain", "Yes");
      ValidateInfoPage.programCheck().should("contain", "Medicaid");
      ValidateInfoPage.visitDateCheck().should("contain", "30");
      ValidateInfoPage.commentCheck().should("contain", "CURA Healthcare Service");

    });
  });
  context("Appointmet History check", () => {
    it("", () => {
      
      WebsiteHomePage.appointmentButton().click();
      LoginPage.usernameField().type("John Doe");
      LoginPage.passwordField().type("ThisIsNotAPassword");
      LoginPage.loginButton().click();
      

      NavigationPage.menuToggle().click();
      NavigationPage.sidebarWrapper().should("have.class", "active");
      NavigationPage.history().click();
      
      ValidateInfoPage.noappointmentCheck().should('be.visible')
    });
  });
});