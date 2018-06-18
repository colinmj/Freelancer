import { createStore, combineReducers, applyMiddleware } from 'redux';

import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export default () => {
  const store = createStore(
    rootReducer,

    typeof composeEnhancers === 'function'
      ? composeEnhancers(applyMiddleware(thunk))
      : applyMiddleware(thunk)
  );
  return store;
};
