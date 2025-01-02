import {test, expect} from '@playwright/test';

const locators = {
    carouselItems: '//*[@class="swiper-wrapper"]/a',
    nextSliderButton: '//*[@aria-label="Next slide"]',
    activeSlide: '.categories-slider .swiper-slide-active',
    header: '.subsection-head',
    popover: '.popover-body',
    popoverButton: '.popover-body .btn_city_yes',
    searchInput: '.search__input'
};

test.beforeEach(async ({ page }) => {
    await page.goto('https://telemart.ua/ua/');
});

test('TELE - 001 Carousel should have more than 2 elements', async ({ page }) => {
    const carouselItems = page.locator(locators.carouselItems);
    const length = await carouselItems.count();
    expect(length).toBeGreaterThan(2);
});

test('TELE - 002 Successful navigation to the page from the Slider', async ({ page }) => {
     await page.addLocatorHandler(page.locator('.popover-body'), async () => {
        await page.locator(locators.popoverButton).click();
        await page.locator(locators.searchInput).first().click();
    });

    const nextSliderButton = page.locator(locators.nextSliderButton);
    const activeSlider = page.locator(locators.activeSlide);
    const carouselElements = await page.locator(locators.carouselItems).all();
    const carouselElementsLinks: string[] = [];
    
    for (let i = 0; i < carouselElements.length; i++) {
        const link: string | null = await carouselElements[i].getAttribute('href');
        if (link !== null) {
            carouselElementsLinks.push(link.toString());
        };
    };

    await nextSliderButton.click();
    await nextSliderButton.click();
    await activeSlider.click();

    let currentUrl = page.url();
    currentUrl = currentUrl.replace('/ua', '');
    const found = carouselElementsLinks.some(link => link === currentUrl);
    expect(found).toBe(true);

    const header = await page.locator(locators.header).innerText();
    expect(header).toContain('товари');
});


