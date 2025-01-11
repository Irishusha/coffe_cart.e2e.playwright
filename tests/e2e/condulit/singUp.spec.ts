import {test, expect} from '@playwright/test';
import {HomePage} from '../../../app/Pages/Condulit/Home.page';
import {SignUpPage} from '../../../app/Pages/Condulit/SignUp.page';
import {autorizData} from '../../../config/authorization';

test("WEB - 002 Successfully Sign Up", async ({ page }) => {
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);   
    await homePage.navigateToMainPage(page);
    await homePage.openSignUp(signUpPage.signUpLink);
    await signUpPage.signUp(signUpPage.userNameFiled, signUpPage.emailOfUserField, signUpPage.passwordOfUserField, signUpPage.signUpButton);

    await expect(signUpPage.nameOfRegisteredUser).toHaveText(autorizData.userName);
    await expect(signUpPage.newArticleLink).toBeVisible();
});