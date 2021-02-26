if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  const React = require('react');
  const ReactRedux = require('react-redux');

  whyDidYouRender(React, {
    // include: [/.*/],
    // exclude: [/TouchRipple/],
    trackAllPureComponents: true,
    trackExtraHooks: [
      [ReactRedux, 'useSelector']
    ]
  });
}