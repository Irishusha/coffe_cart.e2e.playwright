import {Page, Locator} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly cartLink: Locator;
    readonly cappuccinoCup: Locator;
    readonly latteCup: Locator;
    readonly macchiatoCup: Locator;
    readonly americanoCup: Locator;
    readonly mochaCup: Locator;
    readonly cafeBreveCup: Locator;
    readonly checkoutButton: Locator;
    readonly addedCupToCart: Locator;
    readonly githubLink: Locator;
    readonly allCoffeeCups: Locator;
    readonly discountedCoffeeInCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink= this.page.locator('[aria-label="Cart page"]');
        this.cappuccinoCup = this.page.locator('[data-test="Cappuccino"]');
        this.latteCup = this.page.locator('[data-test="Cafe_Latte"]');
        this.macchiatoCup = this.page.locator('[data-test="Espresso_Macchiato"]');
        this.americanoCup = this.page.locator('[data-test="Americano"]');
        this.mochaCup = this.page.locator('[data-test="Mocha"]');
        this.cafeBreveCup = this.page.locator('[data-test="Cafe_Breve"]');
        this.checkoutButton = this.page.locator('[data-test="checkout"]');
        this.addedCupToCart = this.page.locator('.list-item', {hasText : "Cappuccino"});
        this.githubLink = this.page.locator('[aria-label="GitHub page"]');
        this.allCoffeeCups = this.page.locator('.cup');
        this.discountedCoffeeInCart = this.page.locator('.list-item span', { hasText: '(Discounted) Mocha' });
}
async navigateToGitHubPage(githubLink: Locator) {
    await githubLink.click();
};
async navigateToCartPage(cartLink: Locator) {
    await cartLink.click();
};
async addCupToCart(cupLocator: Locator) {
    await cupLocator.click();
};
async hoverCheckoutButton (checkoutButton : Locator) {
    await checkoutButton.hover();
};
}

export async function navigateToHomePage(page: Page) {
    await page.goto('/');
};