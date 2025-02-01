import { test as base, expect} from "@playwright/test";
import { ArticleController } from "../controllers/Article.controller";
import { createContext } from "../helpers/auth.helper";
import dotenv from 'dotenv';


dotenv.config();

type ApiFixture = {
  articleController: ArticleController;
  userData: { email?: string; pass?: string };
};

export const test = base.extend<ApiFixture>({
  request: async ({ request, userData }, use) => {
    const context = await createContext(userData);

    await use(context);
  },

  articleController: async ({ request }, use) => {
    const artContr = new ArticleController(request);
    await use(artContr);
  },

 // userData: { email: "", pass: "" },

  userData: { email: process.env.EMAIL, pass: process.env.PASSWORD },
  //userData: { email: "test123@test.com", pass: "123456789" }

});

export { expect };
