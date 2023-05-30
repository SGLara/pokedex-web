import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import App from './src/App';

// eslint-disable-next-line no-undef
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </React.StrictMode>,
);
