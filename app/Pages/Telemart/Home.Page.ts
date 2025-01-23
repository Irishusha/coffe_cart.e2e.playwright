import {Locator, Page} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly carouselItems: Locator;
    readonly activeSlide: Locator;
    readonly nextSliderButton: Locator;
    readonly header: Locator;
    readonly popover: Locator;
    readonly popoverButton: Locator;
    readonly searchInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.carouselItems = page.locator('//*[@class="swiper-wrapper"]/a');
        this.nextSliderButton = page.locator('//*[@aria-label="Next slide"]');
        this.activeSlide= page.locator( '.categories-slider .swiper-slide-active');
        this.header = page.locator( '.subsection-head');
        this.popover = page.locator( '.popover-body');
        this.popoverButton = page.locator( '.popover-body .btn_city_yes');
        this.searchInput = page.locator( '.search__input');               
}

   async getCarouselElementsLinks (carouselElements: Locator[]){
       const carouselElementsLinks: string[] = [];
       for (let i = 0; i < carouselElements.length; i++) {
           const link: string | null = await carouselElements[i].getAttribute('href');
           if (link !== null) {
               carouselElementsLinks.push(link.toString());
           };
       };
       return carouselElementsLinks;
   };
   
   async replaceCurrentURLWithUA (page: Page) : Promise<string> {
       let currentUrl = page.url();
       currentUrl = currentUrl.replace('/ua', '');
       return currentUrl;
   };
}