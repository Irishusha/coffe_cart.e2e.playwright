import {test, expect } from '../../fixtures/coffeeCart/checkoutFixtures';
import {testData} from '../../../config/test-data-coffee';

test('CCART - 006 Success checkout - ALL valid Data', {tag: ['@checkout']}, async ({ homePage, checkoutPage }) => {
  await homePage.addCupsToCart([homePage.macchiatoCup]);
  await homePage.navigateToCheckout();

  await checkoutPage.fillCustomerName(testData.nameOfCustomer);
  await checkoutPage.fillCustomerEmail(testData.emailOfCustomer);
  await checkoutPage.submitCheckout();

  await expect(checkoutPage.successCheckout).toContainText(testData.checkoutSuccessMessage);
});

test('CCART - 007 Unsuccessful Checkout - EMPTY ALL data', {tag: ['@checkout']}, async ({ homePage, checkoutPage }) => {
  await homePage.addCupsToCart([homePage.mochaCup]);
  await homePage.navigateToCheckout();
  await checkoutPage.submitCheckout();

  await expect(checkoutPage.modalHeader).toBeVisible();
  await expect(checkoutPage.submitButton).toBeEnabled();
});
 
test('CCART - 008 Unsuccessful Checkout - EMPTY Name', async ({ homePage, checkoutPage }) => {
  await homePage.addCupsToCart([homePage.cappuccinoCup]);
  await homePage.navigateToCheckout();
  await checkoutPage.fillCustomerEmail(testData.emailOfCustomer);
  await checkoutPage.submitCheckout();

  await expect(checkoutPage.modalHeader).toBeVisible();
  await expect(checkoutPage.submitButton).toBeEnabled();
});

test('CCART - 009 Unsuccessful Checkout - Invalid Email', async ({ homePage, checkoutPage }) => {
  await homePage.addCupsToCart([homePage.cappuccinoCup]);
  await homePage.navigateToCheckout();
  await checkoutPage.fillCustomerName(testData.nameOfCustomer);
  await checkoutPage.fillCustomerInvalidEmail(testData.InvalidEmailOfCustomer);
  await checkoutPage.submitCheckout();

  await expect(checkoutPage.modalHeader).toBeVisible();
  await expect(checkoutPage.submitButton).toBeEnabled();
});