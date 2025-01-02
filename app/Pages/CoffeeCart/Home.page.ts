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

export class HomePage {
    constructor(private page: Page) {}
    cartLink= this.page.locator('[aria-label="Cart page"]');
    cappuccinoCup = this.page.locator('[data-test="Cappuccino"]');
    latteCup = this.page.locator('[data-test="Cafe_Latte"]');
    macchiatoCup = this.page.locator('[data-test="Espresso_Macchiato"]');
    americanoCup = this.page.locator('[data-test="Americano"]');
    mochaCup = this.page.locator('[data-test="Mocha"]');
    cafeBreveCup = this.page.locator('[data-test="Cafe_Breve"]');
    checkoutButton = this.page.locator('[data-test="checkout"]');
    addedCupToCart = this.page.locator('.list-item', {hasText : "Cappuccino"});
    githubLink = this.page.locator('[aria-label="GitHub page"]');
    allCoffeeCups = this.page.locator('.cup');
    discountedCoffeeInCart = this.page.locator('.list-item span', { hasText: '(Discounted) Mocha' });
};