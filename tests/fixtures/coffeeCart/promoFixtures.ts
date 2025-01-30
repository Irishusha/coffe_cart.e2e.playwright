import {test as base, expect} from '@playwright/test';
import {HomePage} from '../../../app/Pages/CoffeeCart/Home.page';
import {PromoPage} from "../../../app/Pages/CoffeeCart/Promo.page";

type Fixture = {
    homePage: HomePage; 
    promoPage: PromoPage;
};

export const test = base.extend<Fixture>({
    page: async({page}, use) =>{
        const homePage = new HomePage(page);
        homePage.navigateToHomePage();
        await use(page);
    },
    homePage: async({page}, use) =>{
        const homePage = new HomePage(page);
        await use(homePage);
    },
    promoPage: async({page}, use) => {
        const promoPage = new PromoPage(page);
        await use(promoPage);
    },
});
export {expect};
