import {test, expect} from '@playwright/test';
import {HomePage} from '../../../app/Pages/Telemart/Home.Page'

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    await page.goto('https://telemart.ua/ua/');
    homePage = new HomePage(page);
});

test('TELE - 001 Carousel should have more than 2 elements', async ({ page }) => {
    const carouselItemsCount = await homePage.carouselItems.count();
    expect(carouselItemsCount).toBeGreaterThan(2);
});

test('TELE - 002 Successful navigation to the page from the Slider', async ({ page }) => {
    const carouselElements = homePage.carouselItems.all();
    const carouselElementsLinks = await homePage.getCarouselElementsLinks(await carouselElements);
    await homePage.nextSliderButton.click();
    //await page.waitForTimeout(1000);
    await homePage.nextSliderButton.click();
    await homePage.activeSlide.click();
    
    const currentUrl = await homePage.replaceCurrentURLWithUA(page);

    const found = carouselElementsLinks.some(async link => link === currentUrl);
    expect(found).toBe(true);
});