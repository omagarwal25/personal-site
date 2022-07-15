export type Post = {
  title: string;
  publishedDate: string;
  keywords: string[];
  tags: string[];
  slug: string;
  content: string;
  image: string;
  description: string;
};

export type Meta = Omit<Omit<Post, "slug">, "content">;
