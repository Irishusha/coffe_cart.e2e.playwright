import { test, expect } from '@playwright/test';
import { testData } from '../../config/test-data-coffee';
import { navigateToCartPage, navigateToGitHubPage, navigateToHomePage} from '../../Page-objects/HomePage';

test.beforeEach(async ({ page }) => {
  await navigateToHomePage(page);
});

test('CCART - 010 GitHub page is opened', async ({ page }) => {
  const githubLink = page.locator('[aria-label="GitHub page"]');
  const githubPageText = page.locator('.container');

  await navigateToGitHubPage(githubLink);

  await expect(page).toHaveURL(testData.GithubURL);
  await expect(githubPageText).toContainText(testData.textOnGitHubPage);
});


test('CCART - 011 Shopping Cart page is opened', async ({ page }) => {
  const cartLink = page.locator('[aria-label="Cart page"]');
  const noCoffeeMessage = page.locator('.list p');

  await navigateToCartPage(cartLink);

  await expect(page).toHaveURL(testData.CartURL);
  await expect(noCoffeeMessage).toContainText(testData.emptyCartMessage);
});


test('CCART - 012 Home page is opened', async ({ page }) => {
  const cartLink = page.locator('[aria-label="Cart page"]');
  const allCoffeeCups = page.locator('.cup');

  await navigateToCartPage(cartLink);
  await navigateToHomePage(page);

  await expect(page).toHaveURL('/');
  await expect(allCoffeeCups).toHaveCount(testData.totalCups);
});
