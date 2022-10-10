const routerCategories = require('./categories');
const routerFoods = require('./foods');
const routerUploads = require('./uploads');

const generateRoutes = (app) => {
  app.use('/categories', routerCategories);
  app.use('/foods', routerFoods);
  app.use('/uploads', routerUploads);
};

module.exports = {
  generateRoutes,
};
