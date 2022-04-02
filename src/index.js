import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'
import './index.css';
import App from './App';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <App />
);

