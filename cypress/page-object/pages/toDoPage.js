import { BasePage } from "../base/basePage";

export class TodoPage extends BasePage {
    
    constructor(route) {
        super(route);
        this.titleLocator = 'header h1';
        this.toDoSectionLocator = '.todoapp-wrapper';
        this.headerLocator = '.navbar-inverse';
        this.inputForNewItemsLocator = '[data-test="new-todo"]';
        this.itemLocator = 'ul.todo-list li';
        this.crossButtonLocator = '.destroy';
        this.itemCheckboxLocator = 'input.toggle';
        this.clearCompletedButtonLocator = 'button.clear-completed';
    };

    get header() {
        return cy.get(this.headerLocator);
    };

    get title() {
        return cy.get(this.titleLocator);
    };

    get toDoSection() {
        return cy.get(this.toDoSectionLocator);
    };

    get inputForNewItems() {
        return cy.get(this.inputForNewItemsLocator);
    };

    get item() {
        return cy.get(this.itemLocator);
    };

    get crossButton() {
        return cy.get(this.crossButtonLocator);
    };

    get itemCheckbox() {
        return cy.get(this.itemCheckboxLocator);
    };

    get clearCompletedButton() {
        return cy.get(this.clearCompletedButtonLocator);
    };

    getItemByText(text) {
        return this.item.contains(text);
    };

    deleteAllTodos() {
        this.crossButton.each((button) => {
            cy.wrap(button).invoke('show').click();
        });
    };
};