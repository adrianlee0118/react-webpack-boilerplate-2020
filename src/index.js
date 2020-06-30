/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Counter from './Counter';
import thunk from 'redux-thunk'; //imported wherever store is implemented to enable action creator functions for fetching data (API calls etc.)

const initialstate = {
  count: 0,
};

function reducer(state = initialstate, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    case 'RESET':
      return {
        count: 0,
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
