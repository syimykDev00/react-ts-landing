import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-icons';
import {Toaster} from 'react-hot-toast'
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Toaster
     position='top-right'
     reverseOrder={false}
    />
  </React.StrictMode>
);

