import {Locator, Page} from '@playwright/test';
import {testData} from '../../../config/test-data-condulit';

export class NewArticlePage {
  readonly page: Page
  readonly newArticleLink: Locator;
  readonly titleField: Locator;
  readonly descriptionField: Locator;
  readonly textField: Locator;
  readonly tagsField: Locator;
  readonly publishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newArticleLink = this.page.locator('//a[@href="/editor"]');
    this.titleField = this.page.locator('//input[@data-qa-id="editor-title"]');
    this.descriptionField = this.page.locator('//input[@data-qa-id="editor-description"]');
    this.textField = this.page.locator('//textarea[contains(@placeholder,"Write your article")]');
    this.tagsField = this.page.locator('//input[@data-qa-id="editor-tags"]');
    this.publishButton = this.page.locator('//button[@data-qa-id="editor-publish"]');
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