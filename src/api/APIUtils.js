export const isPercentage = text => /^\d+(\.\d+)?%$/.test(text);

export const isIOS = () => [
  'iPad Simulator',
  'iPhone Simulator',
  'iPod Simulator',
  'iPad',
  'iPhone',
  'iPod'
].indexOf(navigator.platform) !== -1
  || (navigator.userAgent.indexOf('Mac') !== -1 && 'ontouchend' in document);

export const isWebPSupported = () => {
  const elem = document.createElement('canvas');
  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') !== -1;
  }
  return false;
};