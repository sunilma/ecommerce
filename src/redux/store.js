import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// for local storage
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer.js';

const middlewares = [];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default {store, persistor};