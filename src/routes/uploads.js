const { Router } = require('express');
const controller = require('../controllers/uploads');

const routerCategories = Router();

routerCategories.get('/ping', controller.ping);
routerCategories.post('/', controller.create);

module.exports = routerCategories;