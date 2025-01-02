import {Locator, Page} from '@playwright/test';
import {autorizData} from '../../../config/authorization';

export async function signUp (Username : Locator, emailOfUser : Locator, passwordOfUser: Locator, signUpButton: Locator){
    await Username.fill(autorizData.userName);
    await emailOfUser.fill(autorizData.emailOfUser);
    await passwordOfUser.fill(autorizData.passwordOfUser);
    await signUpButton.click();
};
export class SignUpPage {
    constructor(private page: Page) {}
        signUpLink = this.page.locator('//a[contains(text(),"Sign up")]');
        userNameFiled = this.page.locator('//input[@placeholder="Username"]');
        emailOfUserField = this.page.locator('//input[@placeholder="Email"]');
        passwordOfUserField = this.page.locator('//input[@placeholder="Password"]');
        signUpButton  = this.page.locator('//button[contains(text(),"Sign up")]');
        newArticleLink = this.page.locator('//a[@href="/editor"]');
        nameOfRegisteredUser(userName : string) {return this.page.locator(`//a[@href="/@${userName}/"]`);
    }
}
