const { getUserAgentRegExp } = require('browserslist-useragent-regexp');
const fs = require('fs');

const utils = './src/utils/utils.js';
const utilsContent = fs.readFileSync(utils, 'utf-8');

const regex = getUserAgentRegExp({
  browsers: [
    "edge >= 18",
    "Firefox >= 65",
    "Chrome >= 9",
    "Safari >= 14",
    "Opera >= 11.5",
    "iOS >= 14.4",
    "OperaMini all",
    "Android >= 4",
    "OperaMobile >= 12",
    "ChromeAndroid >= 32",
    "FirefoxAndroid  65",
    "UCAndroid >= 12.12",
    "Samsung >= 4",
    "QQAndroid >= 10.4",
    "Baidu >=7.12",
    "unreleased versions"
  ],
  allowHigherVersions: true
});

fs.writeFileSync(
  utils,
  utilsContent.replace(
    /^const webpSupportRegex = .+;$/m,
    `const webpSupportRegex = ${regex};`
  )
);