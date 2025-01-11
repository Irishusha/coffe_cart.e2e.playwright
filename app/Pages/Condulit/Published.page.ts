import {Page, Locator} from '@playwright/test'

export class PublishedPage {
    readonly page : Page;
    readonly textPublished : Locator;
    readonly titlePublished: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textPublished = this.page.locator('//*[@data-qa-id="article-body"]/p');
        this.titlePublished = this.page.locator('//h1[@data-qa-id="article-title"]');
}
}