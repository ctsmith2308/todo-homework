import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'

import rootReducer from './reducers/rootReducer';
import Navigation from './Navigation';

const store = createStore(rootReducer, applyMiddleware(logger));

const ProviderStore = () => (
  <Provider store={store}>
    <Navigation/>
  </Provider>
)

export default ProviderStore;
