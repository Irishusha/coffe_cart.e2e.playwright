import {type Locator, type Page} from '@playwright/test';
import {autorizData} from '../../../config/authorization';

export class HomePage {
  readonly page: Page;
  readonly signInLink : Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = this.page.locator('//a[contains(text(),"Sign in")]');
};
async navigateToMainPage (page: Page) {
  await page.goto(autorizData.baseURL);
};
async openSignIn (signInLink: Locator) {
  await signInLink.click();
};
async openSignUp (signUpLink: Locator) {
  await signUpLink.click();
};
async createNewArticle (newArticleLink: Locator) {
  await newArticleLink.click();
};
}