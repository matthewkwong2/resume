const fs = require('fs');

const index = './build/index.html';
const indexContent = fs.readFileSync(index, 'utf-8');

fs.writeFileSync(
  index,
  indexContent.replace(
    /(<link href=)(".*")( rel="stylesheet">)/,
    '$1$2 rel="preload" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript>$1$2$3</noscript>'
  )
);