import { test, expect } from '@playwright/test';
import { testData } from '../../config/test-data-coffee';
import { addCupToCart, hoverCheckoutButton, navigateToHomePage} from '../../Page-objects/HomePage';
import { navigateToCart, removeMacchiato, deleteItems} from '../../Page-objects/CartPage';

test.beforeEach(async ({ page }) => {
  await navigateToHomePage(page);
});

test('CCART - 001 Displays a message for an empty shopping cart', async ({ page }) => {
  const cartLink= page.locator('[aria-label="Cart page"]');
  const noCoffeeMessage = page.locator('.list p');

  await navigateToCart(cartLink);

  await expect(noCoffeeMessage).toContainText(testData.emptyCartMessage);
});

test('CCART - 002 Successfully added single Cappuccino', async ({ page }) => {
  const cappuccinoCup = page.locator('[data-test="Cappuccino"]');
  const checkoutButton = page.locator('[data-test="checkout"]');
  const addedCup = page.locator('.list-item', {hasText : "Cappuccino"});

  await addCupToCart(cappuccinoCup);
  await hoverCheckoutButton(checkoutButton);

  await expect(addedCup).toContainText('Cappuccino');
  await expect(checkoutButton).toContainText('Total: $19.00');
});

test('CCART - 003 Successfully removed cups from the Shopping Cart', async ({ page }) => {
  const latteCup = page.locator('[data-test="Cafe_Latte"]');
  const macchiatoCup = page.locator('[data-test="Espresso_Macchiato"]');
  const checkoutButton = page.locator('[aria-label="Cart page"]');
  const removeAllMacchiato = page.locator('[aria-label="Remove all Espresso Macchiato"]');
  const totalOrder = page.locator('.pay');
  const titleOfLateInTheCart = page.locator('.list-item span', {hasText: 'Cafe Latte'});
  const priceOfLatteInTheCart = page.locator('.list-item', {hasText: '$16.00'});
 
  await addCupToCart(latteCup);
  await addCupToCart(macchiatoCup);
  await navigateToCart(checkoutButton);
  await removeMacchiato(removeAllMacchiato);

  await expect(totalOrder).toContainText('Total: $16.00')
  await expect(priceOfLatteInTheCart).toContainText('$16.00');
  await expect(titleOfLateInTheCart).toContainText('Cafe Latte');
});

test('CCART - 004 Successfully added 3 cups to the Shopping cart', async ({ page }) => {
  const mochaCup = page.locator('[data-test="Mocha"]');
  const macchiatoCup = page.locator('[data-test="Espresso_Macchiato"]');
  const americanoCup = page.locator('[data-test="Americano"]');
  const checkoutButton = page.locator('[aria-label="Cart page"]');
  const TotalCupsInCart = page.locator('.cart-preview .list-item');
  const totalOrder = page.locator('.pay');

  await addCupToCart(mochaCup);
  await addCupToCart(macchiatoCup);
  await addCupToCart(americanoCup);
  await navigateToCart(checkoutButton);

  await expect(TotalCupsInCart).toHaveCount(3);
  await expect(totalOrder).toHaveText('Total: $27.00');
});
 
test('CCART - 005 Successfully removed ALL cups from the Shopping cart', async ({ page }) => {
  const macchiatoCup = page.locator('[data-test="Espresso_Macchiato"]');
  const checkoutButton = page.locator('[aria-label="Cart page"]');
  const deleteIcon = page.locator('.delete')
  const noCoffeeMessage = page.locator('.list p');

  await addCupToCart(macchiatoCup);
  await navigateToCart(checkoutButton)
  await deleteItems(deleteIcon);
  
  await expect(noCoffeeMessage).toContainText(testData.emptyCartMessage);
});