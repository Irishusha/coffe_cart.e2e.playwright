import {type Locator, type Page} from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly noCoffeeMessage: Locator;
    readonly checkoutLink: Locator;
    readonly totalOrder: Locator;
    readonly removeAllMacchiato: Locator;
    readonly titleOfLateInTheCart : Locator;
    readonly priceOfLatteInTheCart : Locator;
    readonly totalCupsInCart : Locator;
    readonly deleteIcon : Locator;

    constructor(page: Page) {
        this.page = page;
        this.noCoffeeMessage = page.locator('.list p');
        this.checkoutLink = page.locator('[aria-label="Cart page"]');
        this.removeAllMacchiato = page.locator('[aria-label="Remove all Espresso Macchiato"]');
        this.totalOrder = page.locator('.pay');
        this.titleOfLateInTheCart = page.locator('.list-item span', {hasText: 'Cafe Latte'});
        this.priceOfLatteInTheCart = page.locator('.list-item', {hasText: '$16.00'});
        this.totalCupsInCart = page.locator('.cart-preview .list-item');
        this.deleteIcon = page.locator('.delete')
    }
    async navigateToCart(cartLocator: Locator) {
        await cartLocator.click();
    };
    async removeMacchiato(removeAllMacchiato: Locator) {
        await removeAllMacchiato.click();
    };
    async deleteItems (deleteIcon: Locator) {
        deleteIcon.click();
    };
}