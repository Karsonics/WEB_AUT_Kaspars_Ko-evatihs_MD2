import { BasePage } from "./basePage";
export class WebsiteHomePage extends BasePage {

    static  appointmentButton() {
        return cy.get('#btn-make-appointment');
    }
    
  }

