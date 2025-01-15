import {Page, Locator} from '@playwright/test'

export class PublishedPage {
    private readonly page : Page;
    readonly textPublished : Locator;
    readonly titlePublished: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textPublished = page.locator('//*[@data-qa-id="article-body"]/p');
        this.titlePublished = page.locator('//h1[@data-qa-id="article-title"]');
}
}