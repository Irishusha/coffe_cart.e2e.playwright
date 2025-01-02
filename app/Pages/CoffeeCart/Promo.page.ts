import {Locator, Page} from '@playwright/test';

export async function acceptThePromo(acceptPromoButton: Locator) {
    await acceptPromoButton.click();
};

export async function skipThePromo(skipPromoButton: Locator){
    await skipPromoButton.click();
};

export class PromoPage {
    constructor(private page: Page) {}
    promoMessage = this.page.locator('.promo');
    acceptPromoButton = this.page.locator('.yes');
    skipPromoButton = this.page.getByRole('button', { name: 'Nah, I\'ll skip.' });
};
