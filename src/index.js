import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/App/index.jsx';
import { GlobalStyles } from './styles/global.styles.js';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
