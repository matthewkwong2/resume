const { getUserAgentRegExp } = require('browserslist-useragent-regexp');

console.log(getUserAgentRegExp({
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
  ignoreMinor: true,
  ignorePatch: true
}));