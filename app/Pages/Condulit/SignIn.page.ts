import { Page } from "@playwright/test";

export class SignInPage {
    constructor(private page: Page) {}
    emailField = this.page.locator('//input[@placeholder="Email"]');
    passwordField = this.page.locator('//input[@placeholder = "Password"]');
    signInButton = this.page.locator('//button[contains(@class, "btn-lg")]');
}