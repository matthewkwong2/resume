const webpSupportRegex = /((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+14[_.]\d+(?:[_.]\d+)?)|(Opera Mini(?:\/att)?\/?(\d+)?(?:\.\d+)?(?:\.\d+)?)|(Opera\/.+Opera Mobi.+Version\/(12|59)\.\d+)|(Opera\/(12|59)\.\d+.+Opera Mobi)|(Opera Mobi.+Opera(?:\/|\s+)(12|59)\.\d+)|(Opera\/9.80.*Version\/(11|12|(1[5-9]|[2-4]\d|5[0-8])|60|(6[2-9]|7[0-3]))\.\d+(?:\.\d+)?)|(SamsungBrowser\/((4|5)|5|6|7|(8|9)|(10|11)|11|(12|13))\.\d+)|(CrMo\/((9|1\d|[2-7]\d|8[0-1])|(8[3-9]|9[0-1]))\.\d+\.\d+\.\d+([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$)))|(Edge\/(18|(79|80|81)|8[3-8])(?:\.\d+)?)|((Chromium|Chrome)\/((9|1\d|[2-7]\d|8[0-1])|(8[3-9]|9[0-1]))\.\d+(?:\.\d+)?([\d.]+$|.*Safari\/(?![\d.]+ Edge\/[\d.]+$)))|(Version\/(0|14)\.\d+(?:\.\d+)? Safari\/)|(Firefox\/(6[5-9]|7\d|8[0-7])\.\d+\.\d+)|(Firefox\/(6[5-9]|7\d|8[0-7])\.\d+(pre|[ab]\d+[a-z]*)?)/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const percentRegex = /^\d+(\.\d+)?%$/;

export const isWebPSupported = () => webpSupportRegex.test(navigator.userAgent);
export const isPercentage = input => percentRegex.test(input);
export const isEmailValid = email => emailRegex.test(email);
export const isValueEmpty = value => !Boolean(value);