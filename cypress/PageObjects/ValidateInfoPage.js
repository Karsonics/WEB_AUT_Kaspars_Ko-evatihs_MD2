export class ValidateInfoPage {

    static facilitycheck() {
    return cy.get('#facility'); 
  }

    static readmissionCheck(){
         return cy.get("#hospital_readmission");
    }


    static programCheck(){
        return cy.get("#program");
    }
    
    static visitDateCheck(){
        return cy.get("#visit_date");
    }

    static commentCheck(){
        return cy.get("#comment");
    }

    static noappointmentCheck(){
        return cy.contains("p", "No appointment");
    }



}