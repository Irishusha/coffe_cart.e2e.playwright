import {test, expect} from '@playwright/test';
import {testData} from '../../config/test-data-condulit';
import {navigateToMainPage, openSignIn} from '../../app/Pages/Condulit/Home.page';
import {logIn} from '../../app/Pages/Condulit/LogIn.page';
import {createNewArticle} from '../../app/Pages/Condulit/Home.page';
import {fillAllFieldsOfArticle, publishArticle} from '../../app/Pages/Condulit/NewArticle.page';

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
  await openSignIn(signInLink);
  await logIn(emailField, passwordField, signInButton);
  await createNewArticle(newArticleLink);
  await fillAllFieldsOfArticle(titleField, descriptionField, textField, tagsField);
  await publishArticle(publishButton);

  await expect(titlePublished).toContainText(testData.newTitleOfArticle);
  await expect(textPublished).toContainText(testData.textOfArticle);
  expect(page.url()).toContain(testData.newTitleOfArticle);
});