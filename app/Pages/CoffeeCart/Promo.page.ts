import {Locator, Page} from '@playwright/test';

export class PromoPage {
    private readonly page: Page;
    readonly promoMessage : Locator;
    readonly acceptPromoButton : Locator;
    readonly skipPromoButton : Locator;

    constructor(page: Page) {
        this.page = page;
        this.promoMessage = page.locator('.promo');
        this.acceptPromoButton = page.locator('.yes');
        this.skipPromoButton = page.getByRole('button', { name: 'Nah, I\'ll skip.' });
};
async acceptThePromo(acceptPromoButton: Locator) {
    await acceptPromoButton.click();
};
async skipThePromo(skipPromoButton: Locator){
    await skipPromoButton.click();
};
}