import { Locator} from '@playwright/test';

export async function acceptThePromo(acceptPromoButton: Locator) {
    await acceptPromoButton.click();
};

export async function skipThePromo(skipPromoButton: Locator){
    await skipPromoButton.click();
};

