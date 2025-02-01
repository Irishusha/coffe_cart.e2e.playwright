import { APIRequestContext, expect } from "@playwright/test";
import { Article } from "../types/Article";

export class ArticleController {
  request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createArticle(data: {
    author: Object;
    title: string;
    description: string;
    body: string;
    tagList: string[];
  }) {
    const articleResponse = await this.request.post("articles", {
      data: {
        article: data,
      },
    });

    expect(articleResponse.status()).toBe(200);

    return articleResponse.json();
  }

  async getArticleBySlug(slug: string) {
    const articleResponse = await this.request.get(`articles/${slug}`, {});

    expect(articleResponse.status()).toBe(200);

    const article: Article = await articleResponse.json();
    return article;
  }

  async getArticleByTitle(title: string) {
    const searchResponse = await this.request.get("articles?offset=0&limit=10");

    const searchResponseJson: { articles: Array<{ title: string }> } =
      await searchResponse.json();

    const article = searchResponseJson.articles.find(
      (value) => value.title === title
    );

    expect(article).toBeTruthy();

    return article;
  }

  async deleteArticleBySlug(slug: string) {
    const articleResponse = await this.request.delete(`articles/${slug}`);

    expect(articleResponse.status()).toBe(204);

    return articleResponse;
  }


async updateArticleBySlug(slug: string, data: {
  title?: string;
  description?: string;
  body?: string;
  tagList?: string[];
}) {
  const articleResponse = await this.request.put(`articles/${slug}`, {
    data: {
      article: data,
    },
  });

  expect(articleResponse.status()).toBe(200);
  return articleResponse.json();
}
}