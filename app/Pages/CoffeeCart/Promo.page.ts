import {Locator, Page} from '@playwright/test';

export class PromoPage {
    readonly page: Page;
    readonly promoMessage : Locator;
    readonly acceptPromoButton : Locator;
    readonly skipPromoButton : Locator;

    constructor(page: Page) {
        this.page = page;
        this.promoMessage = this.page.locator('.promo');
        this.acceptPromoButton = this.page.locator('.yes');
        this.skipPromoButton = this.page.getByRole('button', { name: 'Nah, I\'ll skip.' });
};
async acceptThePromo(acceptPromoButton: Locator) {
    await acceptPromoButton.click();
};
async skipThePromo(skipPromoButton: Locator){
    await skipPromoButton.click();
};
}