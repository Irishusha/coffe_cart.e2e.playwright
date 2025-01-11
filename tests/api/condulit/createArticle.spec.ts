import {test, expect} from '@playwright/test'

test("create article with api", async ({ request, page }) => {
    const response = await request.post(
      "https://conduit-api.learnwebdriverio.com/api/users/login",
      {
        data: {
          user: { email: "some@gma.com", password: "12345" },
        },
      }
    );
  
    const responseJson = await response.json();
    const token = responseJson.user.token;
    const title = "test article5";
  
    const articleResponse = await request.post(
      "https://conduit-api.learnwebdriverio.com/api/articles",
      {
        data: {
          article: {
            author: {},
            title: title,
            description: "",
            body: "",
            tagList: [],
          },
        },
        headers: {
          Authorization: "Token " + token,
        },
      }
    );
  
    expect(articleResponse.status()).toBe(200);
  
    const searchResponse = await request.get(
      "https://conduit-api.learnwebdriverio.com/api/articles?offset=0&limit=10",
      {
        data: {
          user: { email: "some@gma.com", password: "12345" },
        },
        headers: {
          Authorization: "Token " + token,
        },
      }
    );
  
    const searchResponseJson: { articles: Array<{ title: string }> } =
      await searchResponse.json();
  
    const article = searchResponseJson.articles.find(
      (value) => value.title === title
    );
  
    expect(article).toBeTruthy();
  });
  