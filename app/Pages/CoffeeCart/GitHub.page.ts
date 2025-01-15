import {Locator, Page} from '@playwright/test';

export class GitHubPage {
    private readonly page: Page;
    readonly githubPageText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.githubPageText = page.locator('.container');
    };
}