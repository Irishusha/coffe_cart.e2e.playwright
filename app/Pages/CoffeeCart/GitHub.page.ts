import {Page} from '@playwright/test';

export class GitHubPage {
    constructor(private page: Page) {}
    githubPageText = this.page.locator('.container');
};