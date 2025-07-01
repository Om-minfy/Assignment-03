import React, { useState } from 'react';
import './BlogPost.css';

const BlogPost = ({ title, author, content, onGlobalReaction }) => {
  const [likes, setLikes] = useState(0);
  const [hearts, setHearts] = useState(0);
  const [laughs, setLaughs] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [surprises, setSurprises] = useState(0);

  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <h3>By: {author}</h3>
      <p>{content}</p>

      <div className="reaction-buttons">
        <button onClick={() => { setLikes(likes + 1); onGlobalReaction("like"); }}>
          👍 {likes}
        </button>
        <button onClick={() => { setHearts(hearts + 1); onGlobalReaction("heart"); }}>
          ❤️ {hearts}
        </button>
        <button onClick={() => { setLaughs(laughs + 1); onGlobalReaction("laugh"); }}>
          😂 {laughs}
        </button>
        <button onClick={() => { setDislikes(dislikes + 1); onGlobalReaction("dislike"); }}>
          👎 {dislikes}
        </button>
        <button onClick={() => { setSurprises(surprises + 1); onGlobalReaction("surprise"); }}>
          😮 {surprises}
        </button>
      </div>
    </div>
  );
};

export default BlogPost;