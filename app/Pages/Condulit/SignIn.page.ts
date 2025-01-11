import { Locator, Page } from "@playwright/test";

export class SignInPage {
    readonly page : Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = this.page.locator('//input[@placeholder="Email"]');
        this.passwordField = this.page.locator('//input[@placeholder = "Password"]');
        this.signInButton = this.page.locator('//button[contains(@class, "btn-lg")]');
}
}