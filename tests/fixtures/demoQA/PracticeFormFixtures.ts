import {test as base, expect} from '@playwright/test';
import {HomePage} from '../../../app/Pages/DemoQA/Home.page';
import {PracticeFormPage} from '../../../app/Pages/DemoQA/PracticeForm.page';

type Fixture = {
    homePage: HomePage; 
    practiceFormPage: PracticeFormPage;
};

export const test = base.extend<Fixture>({
    homePage: async({page}, use) =>{
        const homePage = new HomePage(page);
        await use(homePage);
},   
    practiceFormPage: async ({page}, use) => {
        const practiceFormPage = new PracticeFormPage(page);
        await use(practiceFormPage);
    },
});
export { expect };

