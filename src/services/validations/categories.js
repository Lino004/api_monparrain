const { Category } = require('../../sequelize/models');
const { error: loggingError } = require('../../config/logging');

const NAMESPACE = 'FOOD_VALIDATION';
const Model = Category;

const title = {
  in: ['body'],
  notEmpty: true,
  errorMessage: 'Ce champ est obligatoire'
};
const id = {
  in: ['params'],
  custom: {
    options: async (value) => {
      try {
        const data = await Model.findByPk(value);
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
