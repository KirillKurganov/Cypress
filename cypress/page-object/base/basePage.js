export class BasePage {
    constructor(route) {
        this.url = `${Cypress.env('base_url')}${route}`;
    }

    navigateTo() {
        cy.visit(this.url);
    };

    getCurrentUrl() {
        return cy.url();    
    };

    waitFor(seconds=1000) {
        cy.wait(seconds);
    };
}