import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'; //imported wherever store is implemented to enable action creator functions for fetching data (API calls etc.)

const store = createStore(reducer, applyMiddleware(thunk));
