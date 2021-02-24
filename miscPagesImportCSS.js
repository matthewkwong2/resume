const fs = require('fs');
const glob = require('glob');

const noMatch = './build/404.html';
const noMatchContent = fs.readFileSync(noMatch, 'utf-8');

const browserNotSupported = './build/browser-not-supported.html';
const browserNotSupportedContent = fs.readFileSync(browserNotSupported, 'utf-8');

const cssFiles = glob.sync('build/static/css/*.css')
  .map(font => font.replace(/^build/, ''));

const loadCSS = cssFiles.map(css => `<link href="${css}" rel="preload" as="style"><link href="${css}" media="print" onload="this.media='all'" rel="stylesheet">`);

fs.writeFileSync(
  noMatch,
  noMatchContent.replace(
    '</head>',
    `${loadCSS.join('')}</head>`
  )
);

fs.writeFileSync(
  browserNotSupported,
  browserNotSupportedContent.replace(
    '</head>',
    `${loadCSS.join('')}</head>`
  )
);