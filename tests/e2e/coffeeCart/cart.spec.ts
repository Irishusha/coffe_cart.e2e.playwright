import {test, expect} from '@playwright/test';
import {testData} from '../../../config/test-data-coffee';
import {addCupToCart, hoverCheckoutButton, navigateToHomePage, HomePage} from '../../../app/Pages/CoffeeCart/Home.page';
import {navigateToCart, removeMacchiato, deleteItems, CartPage} from '../../../app/Pages/CoffeeCart/Cart.page';

let homePage: HomePage;
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
  await navigateToHomePage(page);
  homePage = new HomePage(page);
  cartPage = new CartPage(page);
});

test('CCART - 001 Displays a message for an empty shopping cart', async ({ page }) => {
  await navigateToCart(homePage.cartLink);

  await expect(cartPage.noCoffeeMessage).toContainText(testData.emptyCartMessage);
});

test('CCART - 002 Successfully added single Cappuccino', async ({ page }) => {
  await addCupToCart(homePage.cappuccinoCup);
  await hoverCheckoutButton(homePage.checkoutButton);

  await expect(homePage.addedCupToCart).toContainText('Cappuccino');
  await expect(homePage.checkoutButton).toContainText('Total: $19.00');
});

test('CCART - 003 Successfully removed cups from the Shopping Cart', async ({ page }) => {
  await addCupToCart(homePage.latteCup);
  await addCupToCart(homePage.macchiatoCup);
  await navigateToCart(cartPage.checkoutLink);
  await removeMacchiato(cartPage.removeAllMacchiato);

  await expect(cartPage.totalOrder).toContainText('Total: $16.00')
  await expect(cartPage.priceOfLatteInTheCart).toContainText('$16.00');
  await expect(cartPage.titleOfLateInTheCart).toContainText('Cafe Latte');
});

test('CCART - 004 Successfully added 3 cups to the Shopping cart', async ({ page }) => {
  await addCupToCart(homePage.mochaCup);
  await addCupToCart(homePage.macchiatoCup);
  await addCupToCart(homePage.americanoCup);
  await navigateToCart(cartPage.checkoutLink);

  await expect(cartPage.totalCupsInCart).toHaveCount(3);
  await expect(cartPage.totalOrder).toHaveText('Total: $27.00');
});
 
test('CCART - 005 Successfully removed ALL cups from the Shopping cart', async ({ page }) => {
  await addCupToCart(homePage.macchiatoCup);
  await navigateToCart(cartPage.checkoutLink);
  await deleteItems(cartPage.deleteIcon);
  
  await expect(cartPage.noCoffeeMessage).toContainText(testData.emptyCartMessage);
});