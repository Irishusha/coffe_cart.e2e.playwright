import { test, expect, Page, Locator } from '@playwright/test';
import { testData } from '../../config/test-data';
import {AutorizData} from '../../config/authorization'

async function navigateToMainPage (page: Page) {
  await page.goto(AutorizData.baseURL);
};

async function OpenSignIn (signInLink: Locator) {
  await signInLink.click();
};
async function LogIn(emailField : Locator, passwordField : Locator, signInButton : Locator) {
  await emailField.fill(AutorizData.emailOfUser);
  await passwordField.fill(AutorizData.passwordOfUser);
  await signInButton.click();
};
async function createNewArticle (newArticleLink: Locator) {
  await newArticleLink.click();
}
async function fillAllFieldsOfArticle(titleField : Locator, descriptionField : Locator, textField: Locator, tagsField: Locator) {

  await titleField.fill(testData.newTitleOfArticle);
  await descriptionField.fill(testData.descriptionOfArticle);
  await textField.fill(testData.textOfArticle);
  await tagsField.fill(testData.tagsOfArticle);
};
async function publishArticle(publishButton : Locator) {
  await publishButton.click();
}

test('WEB - 001 Successfully created article', async ({ page }) => { 
  const signInLink = page.locator('//a[contains(text(),"Sign in")]');
  const emailField = page.locator('//input[@placeholder="Email"]');
  const passwordField = page.locator('//input[@placeholder = "Password"]');
  const signInButton = page.locator('//button[contains(@class, "btn-lg")]');
  const newArticleLink = page.locator('//a[@href="/editor"]');
  const titleField = page.locator('//input[@data-qa-id="editor-title"]');
  const descriptionField = page.locator('//input[@data-qa-id="editor-description"]');
  const textField = page.locator('//textarea[contains(@placeholder,"Write your article")]');
  const tagsField = page.locator('//input[@data-qa-id="editor-tags"]');
  const publishButton = page.locator('//button[@data-qa-id="editor-publish"]');
  const textPublished = page.locator('//*[@data-qa-id="article-body"]/p');
  const titlePublished = page.locator('//h1[@data-qa-id="article-title"]');

  await navigateToMainPage(page);
  await OpenSignIn(signInLink);
  await LogIn(emailField, passwordField, signInButton);
  await createNewArticle(newArticleLink);
  await fillAllFieldsOfArticle(titleField, descriptionField, textField, tagsField);
  await publishArticle(publishButton);

  await expect(titlePublished).toContainText(testData.newTitleOfArticle);
  await expect(textPublished).toContainText(testData.textOfArticle);
  expect(page.url()).toContain(testData.newTitleOfArticle);

});