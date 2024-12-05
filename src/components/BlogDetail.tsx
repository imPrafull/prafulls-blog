import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { BlogContent } from './BlogContent';
import styles from './BlogDetail.module.css';
import { blogPosts } from './BlogList';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article className={styles.blogDetail}>
      <Link to="/" className={styles.backButton}>
        <ArrowLeft className={styles.backIcon} />
        Back to List
      </Link>
      <div className={styles.imageContainer}>
        <img src={post.coverImage} alt={post.title} className={styles.coverImage} />
      </div>
      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <Calendar className={styles.metaIcon} />
          <span>{formattedDate}</span>
        </div>
        <div className={styles.metaItem}>
          <Clock className={styles.metaIcon} />
          <span>{post.timeToRead} min read</span>
        </div>
      </div>
      <div className={styles.tags}>
        {post.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <h1 className={styles.title}>{post.title}</h1>
      <BlogContent content={post.content} />
    </article>
  );
};

export default BlogDetail;