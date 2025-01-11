import {Locator, Page} from '@playwright/test';

export class GitHubPage {
    readonly page: Page;
    readonly githubPageText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.githubPageText = this.page.locator('.container');
    };
}