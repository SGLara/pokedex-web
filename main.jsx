import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './src/App';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffcb05',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        body: {
          backgroundImage: 'url("./pikachu-bg.jpg")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#ffe938',
        },
      }),
    },
  },
});

const app = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);

// eslint-disable-next-line no-undef
ReactDOM.render(app, document.getElementById('app'));
