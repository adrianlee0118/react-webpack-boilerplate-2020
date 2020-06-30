import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // imported wherever store is implemented to enable action creator functions for fetching data (API calls etc.)
import reducer from './reducer';

export default store = createStore(reducer, applyMiddleware(thunk));
