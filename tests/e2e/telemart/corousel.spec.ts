import {test, expect} from '../../fixtures/telemart/homePageFixtures';

test('TELE - 001 Carousel should have more than 2 elements', async ({ homePage }) => {
    const carouselItemsCount = await homePage.carouselItems.count();
    expect(carouselItemsCount).toBeGreaterThan(2);
});

test('TELE - 002 Successful navigation to the page from the Slider', async ({ homePage, page }) => {
    const carouselElements = homePage.carouselItems.all();
    const carouselElementsLinks = await homePage.getCarouselElementsLinks(await carouselElements);
    await homePage.nextSliderButton.click();
    await homePage.nextSliderButton.click();
    await homePage.activeSlide.click();
    
    const currentUrl = await homePage.replaceCurrentURLWithUA(page);

    const found = carouselElementsLinks.some(async link => link === currentUrl);
    expect(found).toBe(true);
});