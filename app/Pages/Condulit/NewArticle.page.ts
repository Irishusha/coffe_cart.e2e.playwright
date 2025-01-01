import {Locator} from '@playwright/test';
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