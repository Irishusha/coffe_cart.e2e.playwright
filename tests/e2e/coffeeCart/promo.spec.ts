import {test, expect} from '../../fixtures/coffeeCart/promoFixtures';
import {testData} from '../../../config/test-data-coffee';

test('CCART - 013 Promo is visible', async ({ homePage, promoPage }) => {
  await homePage.addCupsToCart([homePage.cafeBreveCup, homePage.mochaCup,homePage.cafeBreveCup]);

  await expect(promoPage.promoMessage).toContainText(testData.promoMessage);
  });

test('CCART - 014 Accept the promo', async ({ homePage, promoPage }) => {
  await homePage.addCupsToCart([homePage.cafeBreveCup,homePage.mochaCup, homePage.cafeBreveCup]);
  await promoPage.acceptThePromo();
  await homePage.hoverCheckoutButton();

  await expect(homePage.discountedCoffeeInCart).toBeVisible();
  await expect(homePage.checkoutButton).toContainText('Total: $42.00');
  });

 
test('CCART - 015 Skip the promo', async ({ homePage,promoPage }) => {
  await homePage.addCupsToCart([homePage.cappuccinoCup, homePage.mochaCup,homePage.cafeBreveCup]);
  await promoPage.skipThePromo();
  await homePage.hoverCheckoutButton();

  await expect(homePage.discountedCoffeeInCart).not.toBeVisible();
  await expect(homePage.checkoutButton).toContainText('Total: $42.00');
});