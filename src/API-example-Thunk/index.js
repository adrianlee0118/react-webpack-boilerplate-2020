/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import ProductList from './productList';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <ProductList />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
