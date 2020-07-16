if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  const { h } = require('preact');
  whyDidYouRender(h, {
    trackAllPureComponents: true
  });
}