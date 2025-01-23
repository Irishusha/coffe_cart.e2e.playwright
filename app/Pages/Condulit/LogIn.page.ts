import {Locator, Page} from '@playwright/test';
import {autorizData} from '../../../config/authorization';

export class LoginPage  {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async logIn(emailField : Locator, passwordField : Locator, signInButton : Locator) {
    await emailField.fill(autorizData.emailOfUser);
    await passwordField.fill(autorizData.passwordOfUser);
    await signInButton.click();
  };
}