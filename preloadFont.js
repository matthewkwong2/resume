const fs = require('fs');

const index = './build/index.html';
const indexContent = fs.readFileSync(index, 'utf-8');

const fontsToPreload = /^rubik-latin-\d{3}.*\.woff2$/;

const media = './build/static/media';
const fonts = fs.readdirSync(media).filter(filename => fontsToPreload.test(filename));

const preloadFontHTML = fonts.map(filename => `<link rel="preload" href="/static/media/${filename}" as="font" type="font/woff2" crossorigin>`).join('');

fs.writeFileSync(
  index,
  indexContent.replace(
    '</head>',
    `${preloadFontHTML}</head>`
  )
);
