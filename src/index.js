import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import { CookiesProvider } from 'react-cookie';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <MuiThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
