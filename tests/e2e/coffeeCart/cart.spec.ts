import {test, expect} from '../../fixtures/coffeeCart/cartFixtures';
import {testData} from '../../../config/test-data-coffee';

test('CCART - 001 Displays a message for an empty shopping cart', async ({homePage, cartPage}) => {
  await homePage.navigateToCartPage();

  await expect(cartPage.noCoffeeMessage).toContainText(testData.emptyCartMessage);
});

test('CCART - 002 Successfully added single Cup', async ({homePage}) => {
  await homePage.addCupsToCart([homePage.cappuccinoCup]);
  await homePage.hoverCheckoutButton();

  await expect(homePage.addedCupToCart).toContainText('Cappuccino');
  await expect(homePage.checkoutButton).toContainText('Total: $19.00');
});

test('CCART - 003 Successfully removed cups from the Shopping Cart', async ({homePage, cartPage}) => {
  await homePage.addCupsToCart([homePage.latteCup, homePage.macchiatoCup]);
  await cartPage.navigateToCart();
  await cartPage.removeMacchiato();

  await expect(cartPage.totalOrder).toContainText('Total: $16.00')
  await expect(cartPage.priceOfLatteInTheCart).toContainText('$16.00');
  await expect(cartPage.titleOfLateInTheCart).toContainText('Cafe Latte');
});

test('CCART - 004 Successfully added 3 cups to the Shopping cart', async ({homePage, cartPage}) => {
  await homePage.addCupsToCart([homePage.mochaCup,homePage.macchiatoCup,homePage.americanoCup]);
  await cartPage.navigateToCart();

  await expect(cartPage.totalCupsInCart).toHaveCount(3);
  await expect(cartPage.totalOrder).toHaveText('Total: $27.00');
});
 
test('CCART - 005 Successfully removed ALL cups from the Shopping cart', async ({homePage, cartPage}) => {
  await homePage.addCupsToCart([homePage.macchiatoCup]);
  await cartPage.navigateToCart();
  await cartPage.deleteItems();
  
  await expect(cartPage.noCoffeeMessage).toContainText(testData.emptyCartMessage);
});