import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './assets/GlobalStyles';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <App />
  </BrowserRouter>,
  document.querySelector('#container')
);
