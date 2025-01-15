import {test, expect } from '@playwright/test';
import {testData } from '../../../config/test-data-coffee';
import {navigateToHomePage, HomePage} from '../../../app/Pages/CoffeeCart/Home.page';
import {CartPage} from '../../../app/Pages/CoffeeCart/Cart.page';
import {CheckoutPage} from "../../../app/Pages/CoffeeCart/Checkout.page";

let homePage: HomePage;
let checkoutPage: CheckoutPage;
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
  await navigateToHomePage(page);
  homePage = new HomePage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);
});


test('CCART - 006 Success checkout - ALL valid Data', {tag: ['@checkout']}, async ({ page }) => {
  await homePage.addCupToCart(homePage.macchiatoCup);
  await cartPage.navigateToCart(homePage.checkoutButton);
  await checkoutPage.fillCustomerName(checkoutPage.nameOfCustomerField);
  await checkoutPage.fillCustomerEmail(checkoutPage.emailOfCustomerField);
  await checkoutPage.submitCheckout(checkoutPage.submitButton);

  await expect(checkoutPage.successCheckout).toContainText(testData.checkoutSuccessMessage);
});

test('CCART - 007 Unsuccessful Checkout - EMPTY ALL data', {tag: ['@checkout']}, async ({ page }) => {
  await homePage.addCupToCart(homePage.mochaCup);
  await cartPage.navigateToCart(homePage.checkoutButton);
  await checkoutPage.submitCheckout(checkoutPage.submitButton);

  await expect(checkoutPage.modalHeader).toBeVisible();
  await expect(checkoutPage.submitButton).toBeEnabled();
});
 
test('CCART - 008 Unsuccessful Checkout - EMPTY Name', async ({ page }) => {
  await homePage.addCupToCart(homePage.cappuccinoCup);
  await cartPage.navigateToCart(homePage.checkoutButton);
  await checkoutPage.fillCustomerEmail(checkoutPage.emailOfCustomerField);
  await checkoutPage.submitCheckout(checkoutPage.submitButton);

  await expect(checkoutPage.modalHeader).toBeVisible();
  await expect(checkoutPage.submitButton).toBeEnabled();
});

test('CCART - 009 Unsuccessful Checkout - Invalid Email', async ({ page }) => {
  await homePage.addCupToCart(homePage.cappuccinoCup);
  await cartPage.navigateToCart(homePage.checkoutButton)
  await checkoutPage.fillCustomerName(checkoutPage.nameOfCustomerField);
  await checkoutPage.fillCustomerInvalidEmail(checkoutPage.emailOfCustomerField);
  await checkoutPage.submitCheckout(checkoutPage.submitButton);

  await expect(checkoutPage.modalHeader).toBeVisible();
  await expect(checkoutPage.submitButton).toBeEnabled();
});