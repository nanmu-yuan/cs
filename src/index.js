import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root1'));
require('./flipdown/flipdown.js')
root.render(
  <App />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
