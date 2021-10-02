import { TodoPage } from '../../page-object/pages/toDoPage'
import { ROUTES } from '../../data/routes';

describe('Delete items', () => {
    const toDoPage = new TodoPage(ROUTES.toDoPage);

    before(() => {
        toDoPage.navigateTo();
        toDoPage.deleteAllTodos();
    });

    it('verify items are not displayed on the page', () => {
        toDoPage.item.should('not.exist');
    });
});