import {test, expect} from '@playwright/test';
import {testData} from '../../../config/test-data-coffee';
import {navigateToHomePage, HomePage} from '../../../app/Pages/CoffeeCart/Home.page';
import {CartPage} from '../../../app/Pages/CoffeeCart/Cart.page';

let homePage: HomePage;
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
  await navigateToHomePage(page);
  homePage = new HomePage(page);
  cartPage = new CartPage(page);
});

test('CCART - 001 Displays a message for an empty shopping cart', async ({page}) => {
  await cartPage.navigateToCart(homePage.cartLink);

  await expect(cartPage.noCoffeeMessage).toContainText(testData.emptyCartMessage);
});

test('CCART - 002 Successfully added single Cappuccino', async ({page}) => {
  await homePage.addCupToCart(homePage.cappuccinoCup);
  await homePage.hoverCheckoutButton(homePage.checkoutButton);

  await expect(homePage.addedCupToCart).toContainText('Cappuccino');
  await expect(homePage.checkoutButton).toContainText('Total: $19.00');
});

test('CCART - 003 Successfully removed cups from the Shopping Cart', async ({page}) => {
  await homePage.addCupToCart(homePage.latteCup);
  await homePage.addCupToCart(homePage.macchiatoCup);
  await cartPage.navigateToCart(cartPage.checkoutLink);
  await cartPage.removeMacchiato(cartPage.removeAllMacchiato);

  await expect(cartPage.totalOrder).toContainText('Total: $16.00')
  await expect(cartPage.priceOfLatteInTheCart).toContainText('$16.00');
  await expect(cartPage.titleOfLateInTheCart).toContainText('Cafe Latte');
});

test('CCART - 004 Successfully added 3 cups to the Shopping cart', async ({page}) => {
  await homePage.addCupToCart(homePage.mochaCup);
  await homePage.addCupToCart(homePage.macchiatoCup);
  await homePage.addCupToCart(homePage.americanoCup);
  await cartPage.navigateToCart(cartPage.checkoutLink);

  await expect(cartPage.totalCupsInCart).toHaveCount(3);
  await expect(cartPage.totalOrder).toHaveText('Total: $27.00');
});
 
test('CCART - 005 Successfully removed ALL cups from the Shopping cart', async ({page}) => {
  await homePage.addCupToCart(homePage.macchiatoCup);
  await cartPage.navigateToCart(cartPage.checkoutLink);
  await cartPage.deleteItems(cartPage.deleteIcon);
  
  await expect(cartPage.noCoffeeMessage).toContainText(testData.emptyCartMessage);
});