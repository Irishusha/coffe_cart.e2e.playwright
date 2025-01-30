import {test} from '@playwright/test'

test("приклад зберігання cookies в json файл", async ({ page, context }) => {
    await page.goto("https://www.zara.com/ua/uk/");
  
    // цей блок коду натискає кнопку прийняти тільки необхідні і чекає відповіді від сервера
    const responsePromise = page.waitForResponse(RegExp("/consentreceipts"));
    await page.locator("#onetrust-reject-all-handler").click();
    await responsePromise;
  
    const cookies = await context.cookies(); // записуємо всі кукі в змінну cookies
  
    // за допомогою бібліотеки fs і обʼєкту promises ми записуємо кукі у файл zara.cookies.json
   /* await promises.writeFile(
      "tests/condulit-tests/.cookies/zara.cookies.json",
      JSON.stringify(cookies)
    );*/
  });
  
  test("приклад перевикористання кукі в zara.com", async ({ page, context }) => {
    await page.goto("https://zara.com/ua/uk");
  
    const responsePromise = page.waitForResponse(RegExp("/consentreceipts"));
    await page.locator("#onetrust-reject-all-handler").click();
    const result = await responsePromise;
  
    await context.storageState({ path: "tests/cookies-practice/state.json" });
  });
  
  test("приклад роботи зі стейт на zara.com", async ({ browser }) => {
    const context = await browser.newContext({
      storageState: "tests/cookies-practice/state.json",
    });
  
    const page = await context.newPage();
  
    await page.goto("https://zara.com/ua/uk");
  
    console.log(" ");
  });
  