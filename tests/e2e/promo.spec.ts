import { test, expect } from '@playwright/test';
import { testData } from '../../config/test-data-coffee';
import { addCupToCart, hoverCheckoutButton, navigateToHomePage} from '../../app/Pages/CoffeeCart/Home.page';
import {acceptThePromo, skipThePromo} from "../../app/Pages/CoffeeCart/Promo.page"

test.beforeEach(async ({ page }) => {
  await navigateToHomePage(page);
});

test('CCART - 013 Promo is visible', async ({ page }) => {
  const mochaCup = page.locator('[data-test="Mocha"]');
  const cafeBreveCup = page.locator('[data-test="Cafe_Breve"]');
  const promoMessage = page.locator('.promo');

  await addCupToCart(cafeBreveCup);
  await addCupToCart(mochaCup);
  await addCupToCart(cafeBreveCup);

  await expect(promoMessage).toContainText(testData.promoMessage);
  });

  test('CCART - 014 Accept the promo', async ({ page }) => {
    const mochaCup = page.locator('[data-test="Mocha"]');
    const cafeBreveCup = page.locator('[data-test="Cafe_Breve"]');
    const checkoutButton = page.locator('[data-test="checkout"]');
    const acceptPromoButton = page.locator('.yes')
    const discountedCoffeeInCart = page.locator('.list-item span', { hasText: '(Discounted) Mocha' });

    await addCupToCart(cafeBreveCup);
    await addCupToCart(mochaCup);
    await addCupToCart(cafeBreveCup);
    await acceptThePromo(acceptPromoButton);
    await hoverCheckoutButton(checkoutButton);

    await expect(discountedCoffeeInCart).toBeVisible();
    await expect(checkoutButton).toContainText('Total: $42.00');
  });

 
test('CCART - 015 Skip the promo', async ({ page }) => {
  const cappuccinoCup = page.locator('[data-test="Cappuccino"]');
  const mochaCup = page.locator('[data-test="Mocha"]');
  const cafeBreveCup = page.locator('[data-test="Cafe_Breve"]');
  const checkoutButton = page.locator('[data-test="checkout"]');
  const discountedCoffeeInCart = page.locator('.list-item span', { hasText: '(Discounted) Mocha' });
  const skipPromoButton = page.getByRole('button', { name: 'Nah, I\'ll skip.' });

  await addCupToCart(cappuccinoCup);
  await addCupToCart(mochaCup);
  await addCupToCart(cafeBreveCup);
  await skipThePromo(skipPromoButton);
  await hoverCheckoutButton(checkoutButton);

  await expect(discountedCoffeeInCart).not.toBeVisible();
  await expect(checkoutButton).toContainText('Total: $42.00');
});