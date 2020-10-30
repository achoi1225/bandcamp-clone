import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/dashboard.css';
// import './css/album-page.css';
import './css/artist-signup-page.css';
import './css/login-page.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
