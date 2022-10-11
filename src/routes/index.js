const routerCategories = require('./categories');
const routerFoods = require('./foods');
const routerFiles = require('./files');

const generateRoutes = (app) => {
  app.use('/categories', routerCategories);
  app.use('/foods', routerFoods);
  app.use('/files', routerFiles);
};

module.exports = {
  generateRoutes,
};
