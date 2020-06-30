/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

const Hi = ({ firstname, lastname }) => {
  return (
    <div>
      Hello {firstname} {lastname}!
    </div>
  );
};

const MediaCard = ({ title, body, imageUrl }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <img src={imageUrl} />
    </div>
  );
};

const Gate = ({ isOpen }) => {
  return <h2>{isOpen ? 'open' : 'closed'}</h2>;
};

ReactDOM.render(
  <MediaCard
    title={<Gate isOpen="true" />}
    body={<Hi firstname="Adrian" lastname="Lee" />}
    imageUrl="https://www.google.ca/url?sa=i&url=https%3A%2F%2Fwww.saltycrane.com%2Fblog%2F2019%2F03%2Fhow-to-usememo-improve-performance-react-table%2F&psig=AOvVaw3mOAzsttSKGfnWQQVyZ0yk&ust=1593468787025000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi6qPnDpeoCFQAAAAAdAAAAABAI"
  />,
  document.getElementById('app'),
);

module.hot.accept();
