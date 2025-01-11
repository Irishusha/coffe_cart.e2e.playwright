import {test, expect} from '@playwright/test';
import {testData} from '../../../config/test-data-condulit';
import {HomePage} from '../../../app/Pages/Condulit/Home.page';
import {LoginPage} from '../../../app/Pages/Condulit/LogIn.page';
import {NewArticlePage} from '../../../app/Pages/Condulit/NewArticle.page';
import {SignInPage} from '../../../app/Pages/Condulit/SignIn.page';
import {PublishedPage} from '../../../app/Pages/Condulit/Published.page';

test('WEB - 001 Successfully created article', async ({ page }) => { 
  const homePage = new HomePage(page);  
  const loginPage = new LoginPage(page);
  const signInPage = new SignInPage(page);   
  const newArticlePage = new NewArticlePage(page);
  const publishedPage = new PublishedPage(page);

  await homePage.navigateToMainPage(page);
  await homePage.openSignIn(homePage.signInLink);
  await loginPage.logIn(signInPage.emailField, signInPage.passwordField, signInPage.signInButton);
  await homePage.createNewArticle(newArticlePage.newArticleLink);
  await newArticlePage.fillAllFieldsOfArticle(newArticlePage.titleField, newArticlePage.descriptionField, newArticlePage.textField, newArticlePage.tagsField);
  await newArticlePage.publishArticle(newArticlePage.publishButton);

  await expect(publishedPage.titlePublished).toContainText(testData.newTitleOfArticle);
  await expect(publishedPage.textPublished).toContainText(testData.textOfArticle);
  expect(page.url()).toContain(testData.newTitleOfArticle.toLowerCase().replace(/ /g, '-'));
});
