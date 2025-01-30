import {type Locator, type Page} from '@playwright/test';
import {autorizData} from '../../../config/authorization';

export class HomePage {
  readonly page: Page;
  readonly signInLink : Locator;
  readonly signUpLink : Locator;
  readonly newArticleLink : Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = page.locator('//a[contains(text(),"Sign in")]');
    this.signUpLink = page.locator('//a[contains(text(),"Sign up")]');
    this.newArticleLink = page.locator('//a[@href="/editor"]');
};
async navigateToMainPage () {
  await this.page.goto(autorizData.baseURL);
};
async openSignIn () {
  await this.signInLink.click();
};
async openSignUp () {
  await this.signUpLink.click();
};
async createNewArticle () {
  await this.newArticleLink.click();
};
}