
import { createStore } from 'redux';

import rootReducer from '../reducers/rootReducer';

const preloadedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

export const updateLocalStorage = store => {
  store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })
}

export const store = createStore(rootReducer, preloadedState)
