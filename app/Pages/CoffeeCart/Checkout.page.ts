import {Locator, Page} from '@playwright/test';
import { testData } from '../../../config/test-data-coffee';

export async function submitCheckout (submitButton : Locator) {
    await submitButton.click();
};
export async function fillCustomerName(nameOfCustomerField : Locator) {
    await nameOfCustomerField.fill(testData.nameOfCustomer);
};

export async function fillCustomerEmail(emailOfCustomerField : Locator) {
    await emailOfCustomerField.fill(testData.emailOfCustomer);
};

export async function fillCustomerInvalidEmail(emailOfCustomerField : Locator) {
    await emailOfCustomerField.fill(testData.InvalidEmailOfCustomer);
};

export class CheckoutPage {
    constructor(private page: Page) {}
    nameOfCustomerField = this.page.locator('[name="name"]');
    emailOfCustomerField = this.page.locator('[name="email"]');
    submitButton = this.page.locator('[type="submit"]');
    successCheckout = this.page.locator('.success');
    modalHeader = this.page.locator('.modal h1');
};
