import React from 'react';
import ReactDOM from 'react-dom/client';
import { ColorProvider } from './Hooks/color-hooks';
// eslint-disable-next-line import/no-cycle
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ColorProvider>
    <App />
  </ColorProvider>,
);
