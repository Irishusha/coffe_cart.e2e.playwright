import { test } from "../api/fixtures/apiFixture";

test.use({
  userData: { email: process.env.EMAIL, pass: process.env.PASSWORD },
});

test("Create article with api", async ({ articleController }) => {
  const title = "test article5";

  const response = await articleController.createArticle({
    author: {},
    title: title,
    description: "test description",
    body: "body",
    tagList: [],
  });

  const slug = response.article.slug;

  await articleController.getArticleByTitle(title);
  await articleController.getArticleBySlug(slug);
  await articleController.deleteArticleBySlug(slug);
});
