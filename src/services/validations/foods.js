const { Food, Category } = require('../../sequelize/models');
const { error: loggingError } = require('../../config/logging');

const NAMESPACE = 'FOOD_VALIDATION';
const Model = Food;

const title = {
  in: ['body'],
  notEmpty: true,
  errorMessage: 'Ce champ est obligatoire'
};
const categoryId = {
  in: ['body'],
  notEmpty: true,
  errorMessage: 'Ce champ est obligatoire',
  custom: {
    options: async (value) => {
      try {
        const data = await Category.findOne({ where: { id: value } });
        if (!data) {
          return Promise.reject('Cet catégorie n\'existe pas');
        }
      } catch (e) {
        loggingError(NAMESPACE, e.message, e);
      }
    }
  },
};
const id = {
  in: ['params'],
  custom: {
    options: async (value) => {
      try {
        const data = await Model.findOne({ where: { id: value } });
        if (!data) {
          return Promise.reject('Cet élement n\'existe pas');
        }
      } catch (e) {
        loggingError(NAMESPACE, e.message, e);
      }
    }
  },
};

module.exports = {
  create: {
    title,
    categoryId,
  },
  update: {
    id,
  },
  getOne: {
    id,
  },
  deleteOne: {
    id,
  },
};
