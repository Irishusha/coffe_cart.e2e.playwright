import { test as base, expect } from '@playwright/test';
import { HomePage } from '../../../app/Pages/Condulit/Home.page';
import { NewArticlePage } from '../../../app/Pages/Condulit/NewArticle.page';
import { SignInPage } from '../../../app/Pages/Condulit/SignIn.page';
import { PublishedPage } from '../../../app/Pages/Condulit/Published.page';
import { SignUpPage } from '../../../app/Pages/Condulit/SignUp.page';

const storageStatePath = "tests/e2e/condulit/.state/state.json"; 

type Fixture = {
  homePage: HomePage;
  signInPage: SignInPage;
  newArticlePage: NewArticlePage;
  publishedPage: PublishedPage;
  signUpPage : SignUpPage;
};

export const test = base.extend<Fixture>({
  context: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: storageStatePath });
    await use(context);
    await context.close();
  },

   page: async({page}, use) =>{
    const homePage = new HomePage(page);
    await homePage.navigateToMainPage();
    await use(page);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  signInPage: async ({ page }, use) => {
    const signInPage = new SignInPage(page);
    await use(signInPage);
  },

  newArticlePage: async ({ page }, use) => {
    const newArticlePage = new NewArticlePage(page);
    await use(newArticlePage);
  },

  publishedPage: async ({ page }, use) => {
    const publishedPage = new PublishedPage(page);
    await use(publishedPage);
  },

  signUpPage: async ({ page }, use) => {
    const signUpPage = new SignUpPage(page);
    await use(signUpPage);
  }
});

export { expect };