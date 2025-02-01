import { test , expect} from "../api/fixtures/apiFixture";

test.use({
  userData: { email: process.env.EMAIL, pass: process.env.PASSWORD },
});

test("Create, update and verify article with API", async ({ articleController }) => {
  const title = "test article Irisha";
  const newTitle = "updated test article Irisha";

  const createResponse = await articleController.createArticle({
    author: {},
    title: title,
    description: "test description",
    body: "body",
    tagList: [],
  });

  const slug = createResponse.article.slug;

  await articleController.updateArticleBySlug(slug, {
    title: newTitle,
    description: "updated description",
    body: "updated body",
    tagList: ["tag1", "tag2", "test"],
  });


  const updatedArticle = await articleController.getArticleBySlug(slug);
  expect(updatedArticle.article.title).toBe(newTitle);
  expect(updatedArticle.article.description).toBe("updated description");
  expect(updatedArticle.article.body).toBe("updated body");
  expect(updatedArticle.article.tagList).toEqual(["tag1", "tag2","test"]);

});