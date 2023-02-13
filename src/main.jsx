import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import colors from './utils/color-data.json';
import App from './App';
import './index.css';

export const ColorContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
  <ColorContext.Provider value={{ colors }}>
    <App />
  </ColorContext.Provider>,
);
