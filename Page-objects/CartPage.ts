import { test, Page, Locator} from '@playwright/test';

export async function navigateToCart(cartLocator: Locator) {
    await cartLocator.click();
};

export async function removeMacchiato(removeAllMacchiato: Locator) {
    await removeAllMacchiato.click();
};

export async function deleteItems (deleteIcon: Locator) {
    deleteIcon.click();
}