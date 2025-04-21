import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { BlogContent } from './BlogContent';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorState } from './ErrorState';
import { getBlogById } from '../services/api';
import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/date';
import styles from './BlogDetail.module.css';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!id) throw new Error('Blog ID is required');
        const data = await getBlogById(id);
        setPost(data);
      } catch (err) {
        setError('Failed to load blog post. Please try again later.');
        setTimeout(() => navigate('/'), 3000);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, navigate]);

  if (loading) return <LoadingSpinner />;
  if (error || !post) return <ErrorState message={error || 'Post not found'} />;

  const formattedDate = formatDate(post.createdAt);

  return (
    <article className={styles.blogDetail}>
      <Link to="/" className={styles.backButton}>
        <ArrowLeft className={styles.backIcon} />
        Back to List
      </Link>
      <div className={styles.imageContainer}>
        <img src={post.coverImgUrl} alt={post.title} className={styles.coverImage} />
      </div>
      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <Clock className={styles.metaIcon} />
          <span>{formattedDate}</span>
        </div>
      </div>
      <h1 className={styles.title}>{post.title}</h1>
      <BlogContent content={post.content} />
    </article>
  );
};

export default BlogDetail;