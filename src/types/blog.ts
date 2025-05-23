export interface BlogPost {
  _id: string;
  title: string;
  content: string;
  coverImgUrl: string;
  createdAt: string;
  updatedAt: string;
  owner: string;
  __v: number;
}

export interface BlogPostSummary extends Omit<BlogPost, 'content'> {
  excerpt: string;
}