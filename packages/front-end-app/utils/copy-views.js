const fs = require('fs-extra');

const source = './src/views';
const destination = './dist/views';

async function copyFiles() {
  try {
    await fs.copy(source, destination);
    console.log('Views folder copying to /dist completed!');
  } catch (err) {
    console.log(`An error occured while copying the views folder: ${err}`);
  }
}
copyFiles();
