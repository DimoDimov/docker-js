const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const dateFilter = require('nunjucks-date-filter');

const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet('Ben327111'));

exports.greet = greet;

const port = 3000;
const routes = require('./routes');

const init = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // Routes
  app.use('/', routes);
  // Nunjucks
  app.engine('html', nunjucks.render);
  app.set('view engine', 'njk');

  const nenv = nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app,
  });
  nenv.addFilter('date', dateFilter);

  app.set('views', path.join(__dirname, 'views'));

  app.use(express.static(path.join(__dirname, 'public'), {}));

  // start the express server
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    console.log(`Running mode: ${process.env.NODE_ENV}`);
  });
};

const appExpress = init();

exports.appExpress = appExpress;
