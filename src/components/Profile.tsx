import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
  return (
    <section className={styles.profile}>
      <div className={styles.imageWrapper}>
        <img 
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400" 
          alt="Profile" 
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>John Developer</h1>
        <p className={styles.bio}>
          Full-stack developer passionate about React, TypeScript, and modern web technologies. 
          I write about software development, best practices, and my journey in tech.
        </p>
        <div className={styles.social}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Github size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Twitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;