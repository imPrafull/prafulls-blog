import DOMPurify from 'dompurify';

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'h1', 'h2', 'h3',
      'blockquote', 'ol', 'ul', 'li', 'a'
    ],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
};

export const extractTextFromHtml = (html: string): string => {
  // Create a DOMParser instance to parse HTML safely
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};