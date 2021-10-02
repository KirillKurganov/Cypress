import { TodoPage } from '../../page-object/pages/toDoPage'
import { ROUTES } from '../../data/routes';

describe('Delete with "Clear completed" button', () => {
    const toDoPage = new TodoPage(ROUTES.toDoPage);
    const firstElement = 0;

    before(() => {
        toDoPage.navigateTo();
        toDoPage.itemCheckbox.eq(firstElement).check();
        toDoPage.clearCompletedButton.click();
    });

    it('verify the highlighted item was removed', () => {   
        toDoPage.item.should('have.length', 1);
    });

    it('verify the "Clear Completed" button is not visible after items removing', () => {
        toDoPage.clearCompletedButton.should('not.be.visible');
    });
});