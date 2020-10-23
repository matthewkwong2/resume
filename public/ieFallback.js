function isIE() {
  var ua = navigator.userAgent;

  /* MSIE used to detect old browsers and Trident used to newer ones*/
  return ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
}

if (isIE()) {
  var root = document.getElementById('root');
  root.parentNode.removeChild(root);

  document.body.style.height = '100%';
  document.body.style.width = '100%';

  document.write('<h1 style="text-align: center">Browser not supported</h1>');
  document.write('<h2 style="text-align: center; font-weight: normal">Use modern browsers (e.g. Google Chrome, Firefox) to access my awesome online resume for Web experience.</h2>');
}