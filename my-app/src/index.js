import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ParentCounterContext from './components/context/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ParentCounterContext>
    <App />
    </ParentCounterContext>
    </BrowserRouter>
  </React.StrictMode>
);


