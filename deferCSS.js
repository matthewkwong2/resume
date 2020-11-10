const fs = require('fs');

const index = './build/index.html';
const indexContent = fs.readFileSync(index, 'utf-8');

fs.writeFileSync(
  index,
  indexContent.replace(
    /(<link href=)(".*")( rel="stylesheet">)/,
    '$1$2 rel="preload" as="style">$1$2 media="print" onload="this.media=\'all\'"$3'
  )
);