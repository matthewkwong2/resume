import 'fontsource-rubik/300-normal.css';
import 'fontsource-rubik/400-normal.css';
import 'fontsource-rubik/500-normal.css';
import 'fontsource-rubik/700-normal.css';

import supportedBrowsers from 'supportedBrowsers';

const isBrowserSupported = supportedBrowsers.test(navigator.userAgent);

if (isBrowserSupported) {
  require('main');
} else {
  require('fallback');
}