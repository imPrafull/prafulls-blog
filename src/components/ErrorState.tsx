import React from 'react';
import { RefreshCw, AlertCircle } from 'lucide-react';
import styles from './ErrorState.module.css';

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => (
  <div className={styles.errorContainer}>
    <AlertCircle size={48} className={styles.icon} />
    <h2 className={styles.title}>Something went wrong</h2>
    <p className={styles.message}>{message}</p>
    {onRetry && (
      <button onClick={onRetry} className={styles.retryButton}>
        <RefreshCw size={16} className={styles.buttonIcon} />
        Try Again
      </button>
    )}
  </div>
);