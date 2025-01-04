import {test, expect} from '@playwright/test';
import {openSignUp} from '../../../app/Pages/Condulit/Home.page';
import {signUp, SignUpPage} from '../../../app/Pages/Condulit/SignUp.page';
import {navigateToMainPage} from '../../../app/Pages/Condulit/Home.page';
import {autorizData} from '../../../config/authorization';

test("WEB - 002 Successfully Sign Up", async ({ page }) => {
    const signUpPage = new SignUpPage(page);   
    await navigateToMainPage(page);
    await openSignUp(signUpPage.signUpLink);
    await signUp(signUpPage.userNameFiled, signUpPage.emailOfUserField, signUpPage.passwordOfUserField, signUpPage.signUpButton);

    await expect(signUpPage.nameOfRegisteredUser(autorizData.userName)).toContainText(autorizData.userName);
    await expect(signUpPage.newArticleLink).toBeVisible();
});