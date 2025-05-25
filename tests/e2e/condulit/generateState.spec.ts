import {test} from '@playwright/test';
import {autorizData} from '../../../config/authorization'


test("Generate the storageState", async ({ page, context }) => {
    const emailField = page.locator('//input[@placeholder="Email"]');
    const passwordField = page.locator('//input[@placeholder = "Password"]');
    const signInButton = page.locator('//button[contains(@class, "btn-lg")]');

    await page.goto("https://demo.learnwebdriverio.com/login");
    await emailField.fill(autorizData.emailOfUser);
    await passwordField.fill(autorizData.passwordOfUser);
    const responsePromise = page.waitForResponse(response => response.url().includes("/api/user/"));
    await signInButton.click();
    await responsePromise;

    const statePath = "tests/e2e/condulit/.state/state.json";
    await context.storageState({ path: statePath });
    await context.close();
});
