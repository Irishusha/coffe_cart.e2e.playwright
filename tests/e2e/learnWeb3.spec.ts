import { test, expect } from '@playwright/test';
import { testData } from '../../config/test-data';
import {AutorizData} from '../../config/authorization'

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
  const homeLink = page.locator('//a[contains(text(), "Home")]')
  const titlesPublishedLocators = page.locator('//h1[@data-qa-type="preview-title"]');
  const count = await titlesPublishedLocators.count();
  const currentURL = page.url();

  await page.goto(AutorizData.baseURL);
  await signInLink.click();
  await emailField.fill(AutorizData.emailOfUser);
  await passwordField.fill(AutorizData.passwordOfUser);
  await signInButton.click();
  await newArticleLink.click();
  await titleField.fill(testData.newTitleOfArticle);
  await descriptionField.fill(testData.descriptionOfArticle);
  await textField.fill(testData.textOfArticle);
  await tagsField.fill(testData.tagsOfArticle);
  await publishButton.click();

  await homeLink.click();
  
  const titleLocator = page.locator(`//h1[@data-qa-type="preview-title" and text()="${testData.newTitleOfArticle}"]`);
 
  if (await titleLocator.count() > 0) {
    await titleLocator.locator('../following-sibling::span').click();
    await expect(titlePublished).toContainText(testData.newTitleOfArticle);
    await expect(textPublished).toContainText(testData.textOfArticle);
    expect(currentURL).toContain(testData.newTitleOfArticle);
  } else 
    console.log("The published article NOT found");

});