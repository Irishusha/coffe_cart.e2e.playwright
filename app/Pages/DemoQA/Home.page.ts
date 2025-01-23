import {Page} from '@playwright/test';

export class HomePage {
    readonly page: Page;
   
    constructor(page: Page) {
        this.page = page;     
}
    async navigateToPracticeFormPage () {
        await this.page.goto('https://demoqa.com/automation-practice-form');
        return this;
    };
}