import {Locator, Page} from '@playwright/test';

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

async submitCheckout () {
    return await this.submitButton.click();
};
async fillCustomerName(customerName: string) {
    return await this.nameOfCustomerField.fill(customerName);
};
async fillCustomerEmail(customerEmail : string) {
    return await this.emailOfCustomerField.fill(customerEmail);
};
async fillCustomerInvalidEmail(customerInvalidEmail : string) {
    return await this.emailOfCustomerField.fill(customerInvalidEmail);
};
}