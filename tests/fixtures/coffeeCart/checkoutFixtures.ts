import {test as base, expect} from '@playwright/test';
import {HomePage} from '../../../app/Pages/CoffeeCart/Home.page';
import {CheckoutPage} from "../../../app/Pages/CoffeeCart/Checkout.page";

type Fixture = {
    homePage: HomePage; 
    checkoutPage: CheckoutPage;
};

export const test = base.extend<Fixture>({
    page: async({page}, use) =>{
        const homePage = new HomePage(page);
        homePage.navigateToHomePage();
        await use(page);
    },
    homePage: async({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    checkoutPage: async ({page}, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    },
});
export { expect };