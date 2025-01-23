import {test, expect } from '@playwright/test';
import {testData} from '../../../config/test-data-coffee';
import {navigateToHomePage, HomePage} from '../../../app/Pages/CoffeeCart/Home.page';
import {CheckoutPage} from "../../../app/Pages/CoffeeCart/Checkout.page";

let homePage: HomePage;
let checkoutPage: CheckoutPage;

test.beforeEach(async ({ page }) => {
  await navigateToHomePage(page);
  homePage = new HomePage(page);
  checkoutPage = new CheckoutPage(page);
});

test('CCART - 006 Success checkout - ALL valid Data', {tag: ['@checkout']}, async ({ page }) => {
  await homePage.addCupToCart(homePage.macchiatoCup);
  await homePage.navigateToCheckout();

  await checkoutPage.fillCustomerName(testData.nameOfCustomer);
  await checkoutPage.fillCustomerEmail(testData.emailOfCustomer);
  await checkoutPage.submitCheckout();

  await expect(checkoutPage.successCheckout).toContainText(testData.checkoutSuccessMessage);
});

test('CCART - 007 Unsuccessful Checkout - EMPTY ALL data', {tag: ['@checkout']}, async ({ page }) => {
  await homePage.addCupToCart(homePage.mochaCup);
  await homePage.navigateToCheckout();
  await checkoutPage.submitCheckout();

  await expect(checkoutPage.modalHeader).toBeVisible();
  await expect(checkoutPage.submitButton).toBeEnabled();
});
 
test('CCART - 008 Unsuccessful Checkout - EMPTY Name', async ({ page }) => {
  await homePage.addCupToCart(homePage.cappuccinoCup);
  await homePage.navigateToCheckout();
  await checkoutPage.fillCustomerEmail(testData.emailOfCustomer);
  await checkoutPage.submitCheckout();

  await expect(checkoutPage.modalHeader).toBeVisible();
  await expect(checkoutPage.submitButton).toBeEnabled();
});

test('CCART - 009 Unsuccessful Checkout - Invalid Email', async ({ page }) => {
  await homePage.addCupToCart(homePage.cappuccinoCup);
  await homePage.navigateToCheckout();
  await checkoutPage.fillCustomerName(testData.nameOfCustomer);
  await checkoutPage.fillCustomerInvalidEmail(testData.InvalidEmailOfCustomer);
  await checkoutPage.submitCheckout();

  await expect(checkoutPage.modalHeader).toBeVisible();
  await expect(checkoutPage.submitButton).toBeEnabled();
});