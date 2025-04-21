import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
import Profile from './Profile';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorState } from './ErrorState';
import { getBlogs } from '../services/api';
import { BlogPost as BlogPostType } from '../types/blog';
import styles from './BlogList.module.css';

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getBlogs();
      setBlogs(data);
    } catch (err) {
      setError('Unable to load blog posts at this time. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <Profile />
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorState message={error} onRetry={fetchBlogs} />
      ) : (
        <div className={styles.blogList}>
          {blogs.map((post) => (
            <Link key={post._id} to={`/post/${post._id}`} className={styles.blogLink}>
              <BlogPost post={post} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;