const { Food, File } = require('../../sequelize/models');
const { validate: uuidValidate } = require('uuid');

const Model = File;

const IMAGES = 'images';
const IMAGE = 'image';
const AUTRE = 'autre';
const REPOSITORIES = [IMAGES];
const TYPES = [IMAGE, AUTRE];

const create = async (req) => {
  const { repository, foodId, type } = req.query;
  const errors = [];
  if (!req.files || Object.keys(req.files).length === 0) {
    errors.push({
      msg: 'Aucun fichier',
      param: 'files',
      location: 'formData',
    });
  }
  if (!REPOSITORIES.includes(repository)) {
    errors.push({
      msg: `Ce champ doit être l'une des valeurs suivante: ${REPOSITORIES.join(',')}`,
      param: 'repository',
      location: 'query',
    });
  }
  if (!foodId) {
    errors.push({
      msg: 'Ce champ est obligatoire',
      param: 'foodId',
      location: 'query'
    });
  }
  if (!TYPES.includes(type)) {
    errors.push({
      msg: `Ce champ doit être l'une des valeurs suivante: ${REPOSITORIES.join(',')}`,
      param: 'type',
      location: 'query',
    });
  }
  if (foodId) {
    const data = await Food.findOne({ where: { id: foodId } });
    if (!data) {
      errors.push({
        msg: 'Aucun Food avec cette Id',
        param: 'foodId',
        location: 'query',
      });
    }
  }
  return errors;
};

const deleteOne = async (req) => {
  const { id } = req.params;
  const errors = [];
  if (!uuidValidate(id)) {
    errors.push({
      msg: 'Ce champs est incorrect',
      param: 'id',
      location: 'params',
    });
  } else {
    const data = await Model.findByPk(id);
    if (!data) {
      errors.push({
        msg: 'Aucun Filchier avec cette Id',
        param: 'id',
        location: 'params',
      });
    }
  }
  return errors;
};

module.exports = {
  const: {
    IMAGES,
    IMAGE,
    AUTRE,
    REPOSITORIES,
    TYPES,
  },
  create,
  deleteOne,
};
