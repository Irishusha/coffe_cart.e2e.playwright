import {Page, Locator} from '@playwright/test';
import {autorizData} from '../../../config/authorization';

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