import React from 'react';
import { Clock } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/date';
import { extractTextFromHtml } from '../utils/html';
import styles from './BlogPost.module.css';

interface BlogPostProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostProps> = ({ post }) => {
  const excerpt = extractTextFromHtml(post.content).substring(0, 150) + '...';
  const formattedDate = formatDate(post.createdAt);

  return (
    <article className={styles.blogPost}>
      <div className={styles.imageContainer}>
        <img src={post.coverImgUrl} alt={post.title} className={styles.coverImage} />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <Clock className={styles.metaIcon} />
            <span>{formattedDate}</span>
          </div>
        </div>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </article>
  );
};

export default BlogPostCard;