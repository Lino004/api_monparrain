const routerCategories = require('./categories');
const routerFoods = require('./foods');

const generateRoutes = (app) => {
  app.use('/categories', routerCategories);
  app.use('/foods', routerFoods);
};

module.exports = {
  generateRoutes,
};
