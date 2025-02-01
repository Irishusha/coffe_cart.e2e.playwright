export type Article = {
  article: {
    slug: string;
    title: string;
    description: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    tagList: Array<string>;
    favorited: boolean;
    favoritesCount: number;
    author: {
      username: string;
      image: string;
      following: boolean;
    };
  };
};
