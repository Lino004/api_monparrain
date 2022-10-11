const { Router } = require('express');
const controller = require('../controllers/files');

const routerCategories = Router();

routerCategories.get('/ping', controller.ping);
routerCategories.post('/', controller.create);
routerCategories.delete('/:id', controller.deleteOne);

module.exports = routerCategories;