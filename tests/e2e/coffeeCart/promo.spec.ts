import {test, expect} from '@playwright/test';
import {testData} from '../../../config/test-data-coffee';
import {addCupToCart, hoverCheckoutButton, navigateToHomePage, HomePage} from '../../../app/Pages/CoffeeCart/Home.page';
import {acceptThePromo, skipThePromo, PromoPage} from "../../../app/Pages/CoffeeCart/Promo.page"

let homePage: HomePage;
let promoPage: PromoPage;

test.beforeEach(async ({ page }) => {
  await navigateToHomePage(page);
  homePage = new HomePage(page);
  promoPage = new PromoPage(page);
});

test('CCART - 013 Promo is visible', async ({ page }) => {
  await addCupToCart(homePage.cafeBreveCup);
  await addCupToCart(homePage.mochaCup);
  await addCupToCart(homePage.cafeBreveCup);

  await expect(promoPage.promoMessage).toContainText(testData.promoMessage);
  });

test('CCART - 014 Accept the promo', async ({ page }) => {
    await addCupToCart(homePage.cafeBreveCup);
    await addCupToCart(homePage.mochaCup);
    await addCupToCart(homePage.cafeBreveCup);
    await acceptThePromo(promoPage.acceptPromoButton);
    await hoverCheckoutButton(homePage.checkoutButton);

    await expect(homePage.discountedCoffeeInCart).toBeVisible();
    await expect(homePage.checkoutButton).toContainText('Total: $42.00');
  });

 
test('CCART - 015 Skip the promo', async ({ page }) => {
  await addCupToCart(homePage.cappuccinoCup);
  await addCupToCart(homePage.mochaCup);
  await addCupToCart(homePage.cafeBreveCup);
  await skipThePromo(promoPage.skipPromoButton);
  await hoverCheckoutButton(homePage.checkoutButton);

  await expect(homePage.discountedCoffeeInCart).not.toBeVisible();
  await expect(homePage.checkoutButton).toContainText('Total: $42.00');
});