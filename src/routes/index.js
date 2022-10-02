const routerCategories = require('./categories');

const generateRoutes = (app) => {
  app.use('/categories', routerCategories);
};

module.exports = {
  generateRoutes,
};
