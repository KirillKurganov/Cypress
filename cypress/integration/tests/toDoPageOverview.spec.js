import { TodoPage } from '../../page-object/pages/toDoPage'
import { ROUTES } from '../../data/routes';

describe('To-do page overview', () => {
    const toDoPage = new TodoPage(ROUTES.toDoPage);

    before(() => {
        toDoPage.navigateTo();
    });

    it('verify To-do page url is correct', () => {
        const actualUrl = toDoPage.getCurrentUrl();
        actualUrl.should(url => {
            expect(url, 'To-do page url is not correct').to.equal(`${toDoPage.url}`);
        });
    });

    it('verify header is displayed on the page', () => {
        toDoPage.header.should('be.visible');
    });

    it('verify the title is displayed', () => {
        toDoPage.title.should('be.visible');
    });

    it('verify input field for todo items is displayed', () => {
        toDoPage.inputForNewItems.should('be.visible');
    });
});