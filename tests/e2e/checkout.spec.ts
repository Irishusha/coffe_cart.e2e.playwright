import { test, expect } from '@playwright/test';
import { testData } from '../../config/test-data-coffee';
import { addCupToCart, navigateToHomePage} from '../../Page-objects/HomePage';
import { navigateToCart} from '../../Page-objects/CartPage';
import {submitCheckout, fillCustomerName, fillCustomerEmail, fillCustomerInvalidEmail} from "../../Page-objects/CheckoutPage"

test.beforeEach(async ({ page }) => {
  await navigateToHomePage(page);
});

test('CCART - 006 Success checkout - ALL valid Data', {tag: ['@checkout']}, async ({ page }) => {
  const macchiatoCup = page.locator('[data-test="Espresso_Macchiato"]');
  const checkoutButton = page.locator('[data-test="checkout"]');
  const nameOfCustomerField = page.locator('[name="name"]');
  const emailOfCustomerField = page.locator('[name="email"]');
  const submitButton = page.locator('[type="submit"]');
  const successCheckout = page.locator('.success')

  await addCupToCart(macchiatoCup);
  await navigateToCart(checkoutButton);
  await fillCustomerName(nameOfCustomerField);
  await fillCustomerEmail(emailOfCustomerField);
  await submitCheckout(submitButton);

  await expect(successCheckout).toContainText(testData.checkoutSuccessMessage);
});

test('CCART - 007 Unsuccessful Checkout - EMPTY ALL data', {tag: ['@checkout']}, async ({ page }) => {
  const mochaCup = page.locator('[data-test="Mocha"]');
  const checkoutButton = page.locator('[data-test="checkout"]');
  const submitButton = page.locator('[type="submit"]');
  const modalHeader = page.locator('.modal h1');

  await addCupToCart(mochaCup);
  await navigateToCart(checkoutButton);
  await submitCheckout(submitButton);

  await expect(modalHeader).toBeVisible();
  await expect(submitButton).toBeEnabled();
});
 
test('CCART - 008 Unsuccessful Checkout - EMPTY Name', async ({ page }) => {
  const cappuccinoCup = page.locator('[data-test="Cappuccino"]');
  const checkoutButton = page.locator('[data-test="checkout"]');
  const emailOfCustomerField = page.locator('[name="email"]');
  const submitButton = page.locator('[type="submit"]');
  const modalHeader = page.locator('.modal h1');

  await addCupToCart(cappuccinoCup);
  await navigateToCart(checkoutButton);
  await fillCustomerEmail(emailOfCustomerField);
  await submitCheckout(submitButton);

  await expect(modalHeader).toBeVisible();
  await expect(submitButton).toBeEnabled();
});

test('CCART - 009 Unsuccessful Checkout - Invalid Email', async ({ page }) => {
  const cappuccinoCup = page.locator('[data-test="Cappuccino"]');
  const checkoutButton = page.locator('[data-test="checkout"]');
  const nameOfCustomerField = page.locator('[name="name"]');
  const emailOfCustomerField = page.locator('[name="email"]');
  const submitButton = page.locator('[type="submit"]');
  const modalHeader = page.locator('.modal h1');

  await addCupToCart(cappuccinoCup);
  await navigateToCart(checkoutButton)
  await fillCustomerName(nameOfCustomerField);
  await fillCustomerInvalidEmail(emailOfCustomerField);
  await submitCheckout(submitButton);

  await expect(modalHeader).toBeVisible();
  await expect(submitButton).toBeEnabled();
});