import { test, Page, Locator} from '@playwright/test';

export async function navigateToCart(cartLocator: Locator) {
    await cartLocator.click();
};

export async function removeMacchiato(removeAllMacchiato: Locator) {
    await removeAllMacchiato.click();
};

export async function deleteItems (deleteIcon: Locator) {
    deleteIcon.click();
};

export class CartPage {
    constructor(private page: Page) {}
    noCoffeeMessage = this.page.locator('.list p');
    checkoutLink = this.page.locator('[aria-label="Cart page"]');
    removeAllMacchiato = this.page.locator('[aria-label="Remove all Espresso Macchiato"]');
    totalOrder = this.page.locator('.pay');
    titleOfLateInTheCart = this.page.locator('.list-item span', {hasText: 'Cafe Latte'});
    priceOfLatteInTheCart = this.page.locator('.list-item', {hasText: '$16.00'});
    totalCupsInCart = this.page.locator('.cart-preview .list-item');
    deleteIcon = this.page.locator('.delete')
};