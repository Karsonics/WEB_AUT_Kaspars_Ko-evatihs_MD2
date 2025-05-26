export class AppointmentPage {
  
    static selectFacility() {
    return cy.get("#combo_facility");
}

    static checkReadmission() {
    return cy.get('#chk_hospotal_readmission');
}


    static medicaid() {
        return cy.get("#radio_program_medicaid");
    }
    
    static visitDate() {
    return cy.get('#txt_visit_date');
  }

    static comment() {
    return cy.get('#txt_comment');
  }
  

    static datePickerDay(day) {
    return cy.get('.datepicker-days .day').contains(day);
  }



  static bookButton() {
    return cy.get('#btn-book-appointment');
  }





}





