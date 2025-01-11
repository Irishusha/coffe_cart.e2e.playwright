import {test, expect} from '@playwright/test';
import {testData} from '../../../config/test-data-coffee';
import {navigateToHomePage, HomePage} from '../../../app/Pages/CoffeeCart/Home.page';
import {PromoPage} from "../../../app/Pages/CoffeeCart/Promo.page"

let homePage: HomePage;
let promoPage: PromoPage;

test.beforeEach(async ({ page }) => {
  await navigateToHomePage(page);
  homePage = new HomePage(page);
  promoPage = new PromoPage(page);
});

test('CCART - 013 Promo is visible', async ({ page }) => {
  await homePage.addCupToCart(homePage.cafeBreveCup);
  await homePage.addCupToCart(homePage.mochaCup);
  await homePage.addCupToCart(homePage.cafeBreveCup);

  await expect(promoPage.promoMessage).toContainText(testData.promoMessage);
  });

test('CCART - 014 Accept the promo', async ({ page }) => {
    await homePage.addCupToCart(homePage.cafeBreveCup);
    await homePage.addCupToCart(homePage.mochaCup);
    await homePage.addCupToCart(homePage.cafeBreveCup);
    await promoPage.acceptThePromo(promoPage.acceptPromoButton);
    await homePage.hoverCheckoutButton(homePage.checkoutButton);

    await expect(homePage.discountedCoffeeInCart).toBeVisible();
    await expect(homePage.checkoutButton).toContainText('Total: $42.00');
  });

 
test('CCART - 015 Skip the promo', async ({ page }) => {
  await homePage.addCupToCart(homePage.cappuccinoCup);
  await homePage.addCupToCart(homePage.mochaCup);
  await homePage.addCupToCart(homePage.cafeBreveCup);
  await promoPage.skipThePromo(promoPage.skipPromoButton);
  await homePage.hoverCheckoutButton(homePage.checkoutButton);

  await expect(homePage.discountedCoffeeInCart).not.toBeVisible();
  await expect(homePage.checkoutButton).toContainText('Total: $42.00');
});