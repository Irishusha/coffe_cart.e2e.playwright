import {Locator, Page} from '@playwright/test';
import {testData} from '../../../config/test-data-condulit';

export class NewArticlePage {
  private readonly page: Page
  readonly newArticleLink: Locator;
  readonly titleField: Locator;
  readonly descriptionField: Locator;
  readonly textField: Locator;
  readonly tagsField: Locator;
  readonly publishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newArticleLink = page.locator('//a[@href="/editor"]');
    this.titleField = page.locator('//input[@data-qa-id="editor-title"]');
    this.descriptionField = page.locator('//input[@data-qa-id="editor-description"]');
    this.textField = page.locator('//textarea[contains(@placeholder,"Write your article")]');
    this.tagsField = page.locator('//input[@data-qa-id="editor-tags"]');
    this.publishButton = page.locator('//button[@data-qa-id="editor-publish"]');
}
async fillAllFieldsOfArticle(titleField : Locator, descriptionField : Locator, textField: Locator, tagsField: Locator) {
  await titleField.fill(testData.newTitleOfArticle);
  await descriptionField.fill(testData.descriptionOfArticle);
  await textField.fill(testData.textOfArticle);
  await tagsField.fill(testData.tagsOfArticle);
};
async publishArticle(publishButton : Locator) {
  await publishButton.click();
};
}