const fs = require('fs');
const endent = require('endent').default;
const { getUserAgentRegExp } = require('browserslist-useragent-regexp');

const regex = getUserAgentRegExp({ env: process.env.NODE_ENV, allowHigherVersions: true });

fs.writeFileSync(
  './src/supportedBrowsers.js',
  endent(`
    const supportedBrowsers = ${regex};
    export default supportedBrowsers;
  `)
);