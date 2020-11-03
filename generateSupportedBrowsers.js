const fs = require('fs');
const { getUserAgentRegExp } = require('browserslist-useragent-regexp');

const supportedBrowsers = getUserAgentRegExp({
  env: process.env.NODE_ENV,
  allowHigherVersions: true
});

const index = './public/index.html';
const indexContent = fs.readFileSync(index, 'utf-8');

fs.writeFileSync(
  index,
  indexContent.replace(
    /(var supportedBrowsers = )(.*)(;)/,
    `$1${supportedBrowsers}$3`
  )
);