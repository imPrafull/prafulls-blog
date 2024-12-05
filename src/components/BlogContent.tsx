import React from 'react';
import { sanitizeHtml } from '../utils/html';
import styles from './BlogDetail.module.css';

interface BlogContentProps {
  content: string;
}

export const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  const sanitizedContent = sanitizeHtml(content);
  
  return (
    <div 
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};