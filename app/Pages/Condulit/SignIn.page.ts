import { Locator, Page } from "@playwright/test";
import {autorizData} from '../../../config/authorization';

export class SignInPage {
    readonly page : Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.locator('//input[@placeholder="Email"]');
        this.passwordField = page.locator('//input[@placeholder = "Password"]');
        this.signInButton = page.locator('//button[contains(@class, "btn-lg")]');
}
async signIn() {
    await this.emailField.fill(autorizData.emailOfUser);
    await this.passwordField.fill(autorizData.passwordOfUser);
    await this.signInButton.click();
  };
}