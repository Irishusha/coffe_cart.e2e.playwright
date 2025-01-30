import {test, expect} from '../../fixtures/condulit/articleFixtures';
import {autorizData} from '../../../config/authorization';

test("WEB - 002 Successfully Sign Up", async ({ homePage, signUpPage}) => {
    await homePage.openSignUp();
    await signUpPage.signUp();

    await expect(signUpPage.nameOfRegisteredUser).toHaveText(autorizData.userName);
    await expect(signUpPage.newArticleLink).toBeVisible();
});