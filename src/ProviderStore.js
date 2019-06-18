import React from 'react';
import { Provider } from 'react-redux';
import { store, updateLocalStorage } from './middleware/subscriberStore'
import TodoRouter from './router/TodoRouter';


const ProviderStore = () => {
  updateLocalStorage(store);
  return (
    <Provider store={store}>
      <TodoRouter />
    </Provider>
  )
}

export default ProviderStore;
