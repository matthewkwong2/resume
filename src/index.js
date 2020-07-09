import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'intersection-observer';
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
  };
  serviceWorker.register(swConfig);
}