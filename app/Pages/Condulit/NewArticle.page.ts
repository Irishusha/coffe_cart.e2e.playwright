import {Locator, Page} from '@playwright/test';
import {testData} from '../../../config/test-data-condulit';

export async function fillAllFieldsOfArticle(titleField : Locator, descriptionField : Locator, textField: Locator, tagsField: Locator) {
  await titleField.fill(testData.newTitleOfArticle);
  await descriptionField.fill(testData.descriptionOfArticle);
  await textField.fill(testData.textOfArticle);
  await tagsField.fill(testData.tagsOfArticle);
};

export async function publishArticle(publishButton : Locator) {
  await publishButton.click();
};

export class NewArticlePage {
  constructor(private page: Page) {}
    newArticleLink = this.page.locator('//a[@href="/editor"]');
    titleField = this.page.locator('//input[@data-qa-id="editor-title"]');
    descriptionField = this.page.locator('//input[@data-qa-id="editor-description"]');
    textField = this.page.locator('//textarea[contains(@placeholder,"Write your article")]');
    tagsField = this.page.locator('//input[@data-qa-id="editor-tags"]');
    publishButton = this.page.locator('//button[@data-qa-id="editor-publish"]');
}