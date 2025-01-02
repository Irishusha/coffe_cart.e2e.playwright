import {Page, Locator} from '@playwright/test'

export class PublishedPage {
    constructor(private page: Page) {} 
    textPublished = this.page.locator('//*[@data-qa-id="article-body"]/p');
    titlePublished = this.page.locator('//h1[@data-qa-id="article-title"]');
}