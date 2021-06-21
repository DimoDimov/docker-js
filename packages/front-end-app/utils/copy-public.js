const fs = require('fs-extra');

const source = './src/public';
const destination = './dist/public';

async function copyFiles() {
  try {
    await fs.copy(source, destination);
    console.log('Public folder copy completed!');
  } catch (err) {
    console.log(`An error occured while copying the public folder: ${err}`);
  }
}
copyFiles();
