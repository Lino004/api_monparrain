const { Router } = require('express');
const { checkSchema } = require('express-validator');
const controller = require('../controllers/foods');
const schema = require('../services/validations/foods');

const routerCategories = Router();

routerCategories.get('/ping', controller.ping);
routerCategories.get('/', controller.getAll);
routerCategories.get('/:id', checkSchema(schema.getOne), controller.getOne);
routerCategories.delete('/:id', checkSchema(schema.deleteOne), controller.deleteOne);
routerCategories.post('/', checkSchema(schema.create), controller.create);
routerCategories.put('/:id', checkSchema(schema.update), controller.update);

module.exports = routerCategories;