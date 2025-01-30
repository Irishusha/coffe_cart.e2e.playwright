import {test, expect} from '../../fixtures/coffeeCart/homePageFixtures';
import {testData} from '../../../config/test-data-coffee';

test('CCART - 010 GitHub page is opened', async ({ homePage, gitHubPage , page}) => {
  await homePage.navigateToGitHubPage();

  await expect(page).toHaveURL(testData.GithubURL);
  await expect(gitHubPage.githubPageText).toContainText(testData.textOnGitHubPage);
});

test('CCART - 011 Shopping Cart page is opened', async ({ homePage, cartPage, page }) => {
  await homePage.navigateToCartPage();

  await expect(page).toHaveURL(testData.CartURL);
  await expect(cartPage.noCoffeeMessage).toContainText(testData.emptyCartMessage);
});

test('CCART - 012 Home page is opened', async ({ homePage, page }) => {
  await homePage.navigateToCartPage();
  await homePage.navigateToHomePage()

  await expect(page).toHaveURL('/');
  await expect(homePage.allCoffeeCups).toHaveCount(testData.totalCups);
});

