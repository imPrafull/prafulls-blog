import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { extractTextFromHtml } from '../utils/html';
import styles from './BlogPost.module.css';

interface BlogPostProps {
  id: number;
  title: string;
  content: string;
  date: string;
  coverImage: string;
  tags: string[];
  timeToRead: number;
}

const BlogPost: React.FC<BlogPostProps> = ({ 
  title, 
  content, 
  date, 
  coverImage, 
  tags, 
  timeToRead 
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const textContent = extractTextFromHtml(content);
  const excerpt = textContent.substring(0, 150) + '...';

  return (
    <article className={styles.blogPost}>
      <div className={styles.imageContainer}>
        <img src={coverImage} alt={title} className={styles.coverImage} />
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <Calendar className={styles.metaIcon} />
            <span>{formattedDate}</span>
          </div>
          <div className={styles.metaItem}>
            <Clock className={styles.metaIcon} />
            <span>{timeToRead}m read</span>
          </div>
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogPost;