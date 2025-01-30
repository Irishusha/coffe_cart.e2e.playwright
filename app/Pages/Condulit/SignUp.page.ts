import {Locator, Page} from '@playwright/test';
import {autorizData} from '../../../config/authorization';

export class SignUpPage {
    readonly page : Page;
    readonly userNameFiled : Locator;
    readonly emailOfUserField : Locator;
    readonly passwordOfUserField : Locator;
    readonly signUpButton : Locator;
    readonly newArticleLink : Locator;
    readonly nameOfRegisteredUser: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameFiled = page.locator('//input[@placeholder="Username"]');
        this.emailOfUserField = page.locator('//input[@placeholder="Email"]');
        this.passwordOfUserField = page.locator('//input[@placeholder="Password"]');
        this.signUpButton  = page.locator('//button[contains(text(),"Sign up")]');
        this.newArticleLink = page.locator('//a[@href="/editor"]');
        this.nameOfRegisteredUser= page.locator(`//a[@href="/@${autorizData.userName}/"]`);
    }
    async signUp (){
        await this.userNameFiled.fill(autorizData.userName);
        await this.emailOfUserField.fill(autorizData.emailOfUser);
        await this.passwordOfUserField.fill(autorizData.passwordOfUser);
        await this.signUpButton.click();
    }
}
