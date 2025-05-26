export class NavigationPage {
    
    static menuToggle() {
        return cy.get('#menu-toggle');
  }

    static sidebarWrapper() {
        return cy.get('#sidebar-wrapper');
  }

    static history() {
        return cy.contains('a', 'History');
  }
}