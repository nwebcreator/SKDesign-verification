import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/root-reducer';
import { Provider } from 'react-redux';
import { loadCities, loadSources } from './store/config-data/actions';
import cities from './mocks/cities.json';
import sources from './mocks/sources.json';

const store = configureStore({
  reducer: rootReducer
});

store.dispatch(loadCities(cities));
store.dispatch(loadSources(sources));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
