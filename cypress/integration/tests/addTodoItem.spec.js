import { TodoPage } from '../../page-object/pages/toDoPage'
import { ROUTES } from '../../data/routes';

describe('Add To-do Item', () => {
    const toDoPage = new TodoPage(ROUTES.toDoPage);
    const itemName = 'New To-do Item';

    before(() => {
        toDoPage.navigateTo();
        toDoPage.inputForNewItems.type(`${itemName}{enter}`);
    });

    it('verify To-do Item is displayed on the page', () => {
        toDoPage.getItemByText(itemName).should('be.visible');
    });
});