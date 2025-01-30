import {test as base, expect} from '@playwright/test'
import {HomePage} from '../../../app/Pages/CoffeeCart/Home.page';
import {GitHubPage} from '../../../app/Pages/CoffeeCart/GitHub.page';
import {CartPage} from '../../../app/Pages/CoffeeCart/Cart.page';

type Fixture = {
    homePage: HomePage; 
    gitHubPage: GitHubPage, 
    cartPage: CartPage
};

export const test = base.extend<Fixture>({
    page: async({page}, use) =>{
        const homePage = new HomePage(page);
        homePage.navigateToHomePage();
        await use(page);
    },
    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    cartPage: async({page}, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    gitHubPage : async({page}, use) => {
        const gitHubPage = new GitHubPage(page);
        await use(gitHubPage);
    },
});
export {expect};