import 'wdyr';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { swContentCached, swNewContentAvail } from 'actions';

import App from 'App';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
if (process.env.NODE_ENV === 'development') {
  serviceWorkerRegistration.unregister();
} else {
  const swConfig = {
    onUpdate: registration => {
      if (registration && registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
      store.dispatch(swNewContentAvail());
    },
    onSuccess: () => {
      store.dispatch(swContentCached());
    }
  };

  serviceWorkerRegistration.register(swConfig);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
