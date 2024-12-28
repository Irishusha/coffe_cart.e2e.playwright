import { test, Page, Locator} from '@playwright/test';

export async function navigateToHomePage(page: Page) {
    await page.goto('/');
};

export async function navigateToGitHubPage(githubLink: Locator) {
    await githubLink.click();
};

export async function navigateToCartPage(cartLink: Locator) {
    await cartLink.click();
};

export async function addCupToCart(cupLocator: Locator) {
    await cupLocator.click();
};

export async function hoverCheckoutButton (checkoutButton : Locator) {
    await checkoutButton.hover();
};