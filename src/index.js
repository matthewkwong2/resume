import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'wdyr';

import * as serviceWorker from 'serviceWorker';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React, { StrictMode } from 'react';
import { swContentCached, swNewContentAvail } from 'actions';

import App from 'components/App';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import store from 'store';
import theme from 'theme';

smoothscroll.polyfill();

console.log()

render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
if (process.env.NODE_ENV === 'development') {
  serviceWorker.unregister();
} else {
  const swConfig = {
    onUpdate: registration => {
      store.dispatch(swNewContentAvail(registration));
    },
    onSuccess: registration => {
      store.dispatch(swContentCached(registration));
    }
  }
  serviceWorker.register(swConfig);
}