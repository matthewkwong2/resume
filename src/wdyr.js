import { h } from 'preact';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(h, {
    trackAllPureComponents: true
  });
}