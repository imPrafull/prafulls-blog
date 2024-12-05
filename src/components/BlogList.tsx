import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
import Profile from './Profile';
import styles from './BlogList.module.css';

export interface BlogPostData {
  id: number;
  title: string;
  content: string;
  date: string;
  coverImage: string;
  tags: string[];
  timeToRead: number;
}

export const blogPosts: BlogPostData[] = [
  {
    id: 1,
    title: "Getting Started with React",
    content: "React is a popular JavaScript library for building user interfaces. In this post, we'll cover the basics of React and how to get started with your first project.\n\nReact was developed by Facebook and has gained widespread adoption in the web development community. Its component-based architecture allows developers to create reusable UI elements, making it easier to build and maintain complex applications.\n\nTo get started with React, you'll need to have Node.js installed on your computer. Once you have Node.js, you can use create-react-app, a tool that sets up a new React project with a sensible default configuration.\n\nHere's a simple example of a React component:\n\nfunction Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\nThis component can be used in your application like this:\n\n<Welcome name=\"Alice\" />\n\nAs you dive deeper into React, you'll learn about state management, hooks, and how to structure larger applications. Happy coding!",
    date: "2024-03-15",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "JavaScript", "Web Development"],
    timeToRead: 5
  },
  {
    id: 2,
    title: "The Power of Hooks in React",
    content: "Hooks are a powerful feature in React that allow you to use state and other React features without writing a class. Let's explore some common hooks and how they can improve your code.\n\nIntroduced in React 16.8, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. They allow you to use state and other React features without writing a class.\n\nHere are some of the most commonly used Hooks:\n\n1. useState: Allows you to add state to functional components.\n2. useEffect: Lets you perform side effects in function components.\n3. useContext: Subscribes to React context without introducing nesting.\n4. useReducer: Manages complex state logic in components.\n5. useCallback: Returns a memoized version of the callback that only changes if one of the dependencies has changed.\n6. useMemo: Returns a memoized value that only recomputes when one of its dependencies changes.\n\nHere's a simple example using the useState Hook:\n\nimport React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n\nHooks simplify your code, making it easier to understand and test. They also encourage the use of functional components, which can lead to more predictable and easier-to-maintain code.\n\nAs you continue to work with React, you'll find that Hooks provide a powerful and flexible way to manage component logic and state.",
    date: "2024-03-18",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Hooks", "State Management"],
    timeToRead: 8
  }
];

const BlogList: React.FC = () => {
  return (
    <div>
      <Profile />
      <div className={styles.blogList}>
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`} className={styles.blogLink}>
            <BlogPost {...post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;