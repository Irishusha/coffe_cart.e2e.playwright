import {test, expect} from '@playwright/test';
import {testData} from '../../../config/test-data-coffee';
import {HomePage, navigateToHomePage} from '../../../app/Pages/CoffeeCart/Home.page';
import {GitHubPage} from '../../../app/Pages/CoffeeCart/GitHub.page';
import {CartPage} from '../../../app/Pages/CoffeeCart/Cart.page';

let homePage: HomePage;
let gitHubPage : GitHubPage;
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
  await navigateToHomePage(page);
  homePage = new HomePage(page);
  gitHubPage = new GitHubPage(page);
  cartPage = new CartPage(page);
});

test('CCART - 010 GitHub page is opened', async ({ page }) => {
  await homePage.navigateToGitHubPage();

  await expect(page).toHaveURL(testData.GithubURL);
  await expect(gitHubPage.githubPageText).toContainText(testData.textOnGitHubPage);
});

test('CCART - 011 Shopping Cart page is opened', async ({ page }) => {
  await homePage.navigateToCartPage();

  await expect(page).toHaveURL(testData.CartURL);
  await expect(cartPage.noCoffeeMessage).toContainText(testData.emptyCartMessage);
});

test('CCART - 012 Home page is opened', async ({ page }) => {
  await homePage.navigateToCartPage();
  await navigateToHomePage(page);

  await expect(page).toHaveURL('/');
  await expect(homePage.allCoffeeCups).toHaveCount(testData.totalCups);
});

