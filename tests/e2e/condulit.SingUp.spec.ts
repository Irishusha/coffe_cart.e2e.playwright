import {test, expect} from '@playwright/test';
import {openSignUp} from '../../app/Pages/Condulit/Home.page';
import {signUp} from '../../app/Pages/Condulit/SignUp.page';
import {navigateToMainPage} from '../../app/Pages/Condulit/Home.page';
import {autorizData} from '../../config/authorization';

test("WEB - 002 Successfully Sign Up", async ({ page }) => {
    const signUpLink = page.locator('//a[contains(text(),"Sign up")]');
    const userNameFiled = page.locator('//input[@placeholder="Username"]');
    const emailOfUserField = page.locator('//input[@placeholder="Email"]');
    const passwordOfUserField = page.locator('//input[@placeholder="Password"]');
    const signUpButton  = page.locator('//button[contains(text(),"Sign up")]');
    const nameOfRegisteredUser = page.locator(`//a[@href="/@${autorizData.userName}/"]`);
    const newArticleLink = page.locator('//a[@href="/editor"]');

    await navigateToMainPage(page);
    await openSignUp(signUpLink);
    await signUp(userNameFiled, emailOfUserField, passwordOfUserField, signUpButton);

    await expect(nameOfRegisteredUser).toContainText(autorizData.userName);
    await expect(newArticleLink).toBeVisible();
});