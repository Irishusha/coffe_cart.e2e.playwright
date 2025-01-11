import {Locator, Page} from '@playwright/test';
import {autorizData} from '../../../config/authorization';

export class SignUpPage {
    readonly page : Page;
    readonly signUpLink : Locator;
    readonly userNameFiled : Locator;
    readonly emailOfUserField : Locator;
    readonly passwordOfUserField : Locator;
    readonly signUpButton : Locator;
    readonly newArticleLink : Locator;
    readonly nameOfRegisteredUser: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpLink = this.page.locator('//a[contains(text(),"Sign up")]');
        this.userNameFiled = this.page.locator('//input[@placeholder="Username"]');
        this.emailOfUserField = this.page.locator('//input[@placeholder="Email"]');
        this.passwordOfUserField = this.page.locator('//input[@placeholder="Password"]');
        this.signUpButton  = this.page.locator('//button[contains(text(),"Sign up")]');
        this.newArticleLink = this.page.locator('//a[@href="/editor"]');
        this.nameOfRegisteredUser=this.page.locator(`//a[@href="/@${autorizData.userName}/"]`);
    }
    async signUp (Username : Locator, emailOfUser : Locator, passwordOfUser: Locator, signUpButton: Locator){
        await Username.fill(autorizData.userName);
        await emailOfUser.fill(autorizData.emailOfUser);
        await passwordOfUser.fill(autorizData.passwordOfUser);
        await signUpButton.click();
    }
   /* async nameOfRegisteredUser (userName : string) {
        return this.page.locator(`//a[@href="/@${autorizData.userName}/"]`);
    }*/
}
