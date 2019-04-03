import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';
import Navigation from './Navigation';

const store = createStore(rootReducer);

const ProviderStore = () => (
  <Provider store={store}>
    <Navigation/>
  </Provider>
)

export default ProviderStore;
