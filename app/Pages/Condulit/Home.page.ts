import {Page, Locator} from '@playwright/test';
import {autorizData} from '../../../config/authorization';


export class HomePage {
  constructor(private page: Page) {}
  signInLink = this.page.locator('//a[contains(text(),"Sign in")]');
};

export async function navigateToMainPage (page: Page) {
  await page.goto(autorizData.baseURL);
};

export async function openSignIn (signInLink: Locator) {
  await signInLink.click();
};

export async function openSignUp (signUpLink: Locator) {
  await signUpLink.click();
};

export async function createNewArticle (newArticleLink: Locator) {
  await newArticleLink.click();
};