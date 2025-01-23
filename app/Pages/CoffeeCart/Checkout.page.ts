import {Locator, Page} from '@playwright/test';
import {testData} from '../../../config/test-data-coffee';

export class CheckoutPage {
    readonly page: Page;
    readonly nameOfCustomerField: Locator;
    readonly emailOfCustomerField: Locator;
    readonly submitButton: Locator;
    readonly successCheckout: Locator;
    readonly modalHeader: Locator;

    constructor(page: Page) {
    this.page = page;
    this.nameOfCustomerField = page.locator('[name="name"]');
    this.emailOfCustomerField = page.locator('[name="email"]');
    this.submitButton = page.locator('[type="submit"]');
    this.successCheckout = page.locator('.success');
    this.modalHeader = page.locator('.modal h1');
}
async submitCheckout (submitButton : Locator) {
    await submitButton.click();
};
async fillCustomerName(nameOfCustomerField : Locator) {
    await nameOfCustomerField.fill(testData.nameOfCustomer);
};
async fillCustomerEmail(emailOfCustomerField : Locator) {
    await emailOfCustomerField.fill(testData.emailOfCustomer);
};
async fillCustomerInvalidEmail(emailOfCustomerField : Locator) {
    await emailOfCustomerField.fill(testData.InvalidEmailOfCustomer);
};
}