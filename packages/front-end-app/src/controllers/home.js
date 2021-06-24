const { VIEW } = require('../lib/views');

exports.getHome = (req, res) => {
  res.render(VIEW.HOME);
};
