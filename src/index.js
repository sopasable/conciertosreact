import React from 'react';
import ReactDOM from 'react-dom/client';
import * as api from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <api.Encabezado />
  </React.StrictMode>
);