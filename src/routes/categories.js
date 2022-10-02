const { Router } = require('express');
const { checkSchema } = require('express-validator');
const controller = require('../controllers/categories');
const schema = require('../services/validations/categories');

const routerCategories = Router();

routerCategories.get('/ping', controller.ping);
routerCategories.get('/', controller.getAll);
routerCategories.get('/:id', controller.getOne);
routerCategories.delete('/:id', controller.deleteOne);
routerCategories.post('/', checkSchema(schema.create), controller.create);
routerCategories.put('/:id', checkSchema(schema.update), controller.update);

module.exports = routerCategories;