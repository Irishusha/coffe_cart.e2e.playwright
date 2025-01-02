import { test, expect } from '@playwright/test';
import { testData } from '../../../config/test-data-coffee';
import { addCupToCart, navigateToHomePage,HomePage} from '../../../app/Pages/CoffeeCart/Home.page';
import { navigateToCart, CartPage} from '../../../app/Pages/CoffeeCart/Cart.page';
import {submitCheckout, fillCustomerName, fillCustomerEmail, fillCustomerInvalidEmail, CheckoutPage} from "../../../app/Pages/CoffeeCart/Checkout.page";

let homePage: HomePage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

test.beforeEach(async ({ page }) => {
  await navigateToHomePage(page);
  homePage = new HomePage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);
});


test('CCART - 006 Success checkout - ALL valid Data', {tag: ['@checkout']}, async ({ page }) => {
  await addCupToCart(homePage.macchiatoCup);
  await navigateToCart(homePage.checkoutButton);
  await fillCustomerName(checkoutPage.nameOfCustomerField);
  await fillCustomerEmail(checkoutPage.emailOfCustomerField);
  await submitCheckout(checkoutPage.submitButton);

  await expect(checkoutPage.successCheckout).toContainText(testData.checkoutSuccessMessage);
});

test('CCART - 007 Unsuccessful Checkout - EMPTY ALL data', {tag: ['@checkout']}, async ({ page }) => {
  await addCupToCart(homePage.mochaCup);
  await navigateToCart(homePage.checkoutButton);
  await submitCheckout(checkoutPage.submitButton);

  await expect(checkoutPage.modalHeader).toBeVisible();
  await expect(checkoutPage.submitButton).toBeEnabled();
});
 
test('CCART - 008 Unsuccessful Checkout - EMPTY Name', async ({ page }) => {
  await addCupToCart(homePage.cappuccinoCup);
  await navigateToCart(homePage.checkoutButton);
  await fillCustomerEmail(checkoutPage.emailOfCustomerField);
  await submitCheckout(checkoutPage.submitButton);

  await expect(checkoutPage.modalHeader).toBeVisible();
  await expect(checkoutPage.submitButton).toBeEnabled();
});

test('CCART - 009 Unsuccessful Checkout - Invalid Email', async ({ page }) => {
  await addCupToCart(homePage.cappuccinoCup);
  await navigateToCart(homePage.checkoutButton)
  await fillCustomerName(checkoutPage.nameOfCustomerField);
  await fillCustomerInvalidEmail(checkoutPage.emailOfCustomerField);
  await submitCheckout(checkoutPage.submitButton);

  await expect(checkoutPage.modalHeader).toBeVisible();
  await expect(checkoutPage.submitButton).toBeEnabled();
});