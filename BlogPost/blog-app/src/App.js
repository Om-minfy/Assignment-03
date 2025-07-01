import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsListPage from "./pages/PostsListPage";
import PostDetailPage from "./pages/PostDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  const reactionTypes = ["like","heart","laugh","dislike","surprise"];
  const initial = reactionTypes.reduce((a, t) => ({ ...a, [t]: 0 }), {});
  const [total, setTotal] = useState(initial);

  const handleGlobalReaction = (type) =>
    setTotal(prev => ({ ...prev, [type]: prev[type] + 1 }));

  return (
    <BrowserRouter>
      <header style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
        <nav>
          <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
          <Link to="/posts" style={{ marginRight: "15px" }}>Posts</Link>
          <Link to="/blog" style={{ marginRight: "15px" }}>My Blog</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts" element={<PostsListPage />} />
          <Route path="/posts/:postId" element={<PostDetailPage />} />
          <Route
            path="/blog"
            element={
              <div className="App">
                <h1>My Blog</h1>
                <div className="reactions-summary">
                  <h2>Total Reactions:</h2>
                  <div className="reaction-stats">
                    {reactionTypes.map(key => (
                      <div key={key}>{{like:'👍',heart:'❤️',laugh:'😂',dislike:'👎',surprise:'😮'}[key]} {key.charAt(0).toUpperCase()+key.slice(1)}: {total[key]}</div>
                    ))}
                  </div>
                </div>
                <BlogPost
                  title="World War"
                  author="Om Raj"
                  content="Israel attacked Iran and destroyed an Iranian airbase. Many people died."
                  onGlobalReaction={handleGlobalReaction}
                />
                <BlogPost
                  title="Minfy Technologies"
                  author="Ashim Raj"
                  content="Founded in 2016, Minfy has grown rapidly."
                  onGlobalReaction={handleGlobalReaction}
                />
                <BlogPost
                  title="Hyderabad News"
                  author="Aryan"
                  content="IMD issued a yellow alert for heavy rain June 27–30."
                  onGlobalReaction={handleGlobalReaction}
                />
              </div>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;