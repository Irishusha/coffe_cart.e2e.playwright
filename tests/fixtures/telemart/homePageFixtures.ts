import { test as base, expect } from '@playwright/test';
import { HomePage } from '../../../app/Pages/Telemart/Home.Page';

type Fixture = {
    homePage: HomePage; 
};
export const test = base.extend<Fixture>({
   page: async({page}, use) =>{
    await page.goto('https://telemart.ua/ua/');
    await use(page);
      },
  homePage: async ({ page }, use) => {
    await page.goto('https://telemart.ua/ua/');
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

export { expect };