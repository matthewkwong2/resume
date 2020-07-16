if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  const React = require('react');
  whyDidYouRender(React, {
    trackAllPureComponents: true
  });
}