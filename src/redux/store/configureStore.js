import { createStore, combineReducers, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    rootReducer,

    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
