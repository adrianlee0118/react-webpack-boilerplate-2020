/* eslint-env browser */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

const Reddit = () => {
  const [posts, setPosts] = useState([]);
  React.useEffect(() => {
    Axios.get('https://www.reddit.com/r/reactjs.json').then((res) => {
      const newPosts = res.data.data.children.map((obj) => obj.data);
      setPosts(newPosts);
    });
  }, []);
  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.url}>
              <span>{post.title}</span>
            </a>
            <ul>
              <li>Score: {post.score}</li>
              <li>Author: {post.author_fullname}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<Reddit />, document.getElementById('app'));

module.hot.accept();
