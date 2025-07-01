import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PageStyles.css';

function PostDetailPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://dummyjson.com/posts/${postId}`);
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, [postId]);

  if (!post) return <p>Loading post details...</p>;

  return (
    <div className="page">
      <Link to="/posts" className="back-link">← Back to Posts</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetailPage;