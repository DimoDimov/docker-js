const fs = require("fs-extra");

const source = './src/public';
const destination = './dist/public';

// copy source folder to destination
fs.copy(source, destination)
 .then(() => console.log('Public folder copy completed!'))
 .catch(err => console.log(`An error occured while copying the public folder: ${err}`));