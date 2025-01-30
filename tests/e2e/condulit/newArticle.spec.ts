import {test, expect} from '../../fixtures/condulit/articleFixtures';
import {testData} from '../../../config/test-data-condulit';


test('WEB - 001 Successfully created article', async ({ homePage,signInPage,newArticlePage,publishedPage, page }) => { 
  //await homePage.openSignIn();
  //await signInPage.signIn();
  await homePage.createNewArticle();
  await newArticlePage.fillAllFieldsOfArticle();
  await newArticlePage.publishArticle();

  await expect(publishedPage.titlePublished).toContainText(testData.newTitleOfArticle);
  await expect(publishedPage.textPublished).toContainText(testData.textOfArticle);
  expect(page.url()).toContain(testData.newTitleOfArticle.toLowerCase().replace(/ /g, '-'));
});
