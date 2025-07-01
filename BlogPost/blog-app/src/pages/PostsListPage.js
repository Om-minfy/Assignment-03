import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PostsListPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      setPosts(data.posts.slice(0, 10));
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  if (isLoading) return <p>Loading posts...</p>;

  return (
    <div className="page">
      <h1>Blog Posts</h1>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsListPage;