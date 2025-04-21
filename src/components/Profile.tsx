import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import styles from './Profile.module.css';
import profileImg from '../assets/profile-pic.jpg';

const Profile: React.FC = () => {
  return (
    <section className={styles.profile}>
      <div className={styles.imageWrapper}>
        <img 
          src={profileImg}
          alt="Profile" 
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>Hi! I am Prafull Sakpal</h1>
        <p className={styles.bio}>
        I'm a full-stack developer passionate about crafting engaging digital experiences. On this blog, I share insights on software development, best practices, new things I learn, and moments from my journey in tech.
        </p>
        <div className={styles.social}>
          <a href="https://github.com/imPrafull" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/prafullsakpal/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;