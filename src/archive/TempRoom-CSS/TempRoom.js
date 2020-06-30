/* eslint-env browser */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const Room = () => {
  const [isLit, setLit] = useState(true);
  const [temp, setTemp] = useState(22);
  const brightness = isLit ? 'lit' : 'dark';

  return (
    <div className={`room ${brightness}`}>
      the room is {brightness}
      <br />
      <button onClick={() => setLit(true)}>on</button>
      <button onClick={() => setLit(!isLit)}>flip</button>
      <button onClick={() => setLit(false)}>off</button>
      <br />
      the temperature is {temp}
      <br />
      <button onClick={() => setTemp(temp + 1)}>+</button>
      <button onClick={() => setTemp(temp - 1)}>-</button>
    </div>
  );
};

ReactDOM.render(<Room />, document.getElementById('app'));

module.hot.accept();
