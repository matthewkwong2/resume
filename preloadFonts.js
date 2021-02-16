const fs = require('fs');
const glob = require('glob');

const index = './build/index.html';
const indexContent = fs.readFileSync(index, 'utf-8');

const fontsToPreload = glob.sync('build/static/media/rubik-latin-@(300|400|700)-normal.*.woff2')
  .map(font => font.replace(/^build/, ''));
const preloadLinks = fontsToPreload.map(font => `<link rel="preload" href="${font}" as="font" type="font/woff2" crossorigin>`);

fs.writeFileSync(
  index,
  indexContent.replace(
    '</head>',
    `${preloadLinks.join('')}</head>`
  )
);