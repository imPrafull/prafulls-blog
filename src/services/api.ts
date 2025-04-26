import { BlogPost, BlogPostSummary } from '../types/blog';

const API_BASE_URL = 'http://localhost:3000';
// const API_BASE_URL = 'https://prafulls-blog-api.onrender.com';

export async function getBlogs(): Promise<BlogPostSummary[]> {
  const response = await fetch(`${API_BASE_URL}/blogs`);
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return response.json();
}

export async function getBlogById(id: string): Promise<BlogPost> {
  const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog');
  }
  return response.json();
}