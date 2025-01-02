import {test, expect} from '@playwright/test';
import {testData} from '../../../config/test-data-condulit';
import {HomePage, navigateToMainPage, openSignIn, createNewArticle} from '../../../app/Pages/Condulit/Home.page';
import {logIn} from '../../../app/Pages/Condulit/LogIn.page';
import {fillAllFieldsOfArticle, publishArticle, NewArticlePage} from '../../../app/Pages/Condulit/NewArticle.page';
import {SignInPage} from '../../../app/Pages/Condulit/SignIn.page';
import {PublishedPage} from '../../../app/Pages/Condulit/Published.page';

test('WEB - 001 Successfully created article', async ({ page }) => { 
  const homePage = new HomePage(page);  
  const signInPage = new SignInPage(page);   
  const newArticlePage = new NewArticlePage(page);
  const publishedPage = new PublishedPage(page);

  await navigateToMainPage(page);
  await openSignIn(homePage.signInLink);
  await logIn(signInPage.emailField, signInPage.passwordField, signInPage.signInButton);
  await createNewArticle(newArticlePage.newArticleLink);
  await fillAllFieldsOfArticle(newArticlePage.titleField, newArticlePage.descriptionField, newArticlePage.textField, newArticlePage.tagsField);
  await publishArticle(newArticlePage.publishButton);

  await expect(publishedPage.titlePublished).toContainText(testData.newTitleOfArticle);
  await expect(publishedPage.textPublished).toContainText(testData.textOfArticle);
  expect(page.url()).toContain(testData.newTitleOfArticle.toLowerCase().replace(/ /g, '-'));
});
