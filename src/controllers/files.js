const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const { error: loggingError } = require('../config/logging');
const { upload } = require('../config');
const validations = require('../services/validations/files');
const { File, Food } = require('../sequelize/models');

const NAMESPACE = 'FOOD_CONTROLLER';
const Model = File;

/**
 * Permet de tester la disponibilité de l'endpoint
 * @param {Request} req
 * @param {Response} res
 */
const ping = (req, res) => {
  try {
    return res.status(200).send('ping');
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};

/**
 * Permet d'enregistrer un fichier
 * @param {Request} req
 * @param {Response} res
 */
const create = async (req, res) => {
  const errors = await validations.create(req);
  if (errors.length) return res.status(400).json({ errors });
  try {
    let repository = 'files';
    const { repos, foodId, type } = req.query;
    if (repos) repository = repos;
    const [fileToUpload] = Object.values(req.files);
    const [filename, extension] = fileToUpload.name.match(/[^\\]*\.(\w+)$/);
    const id = uuidv4();
    const moveTo = `${repository}/${id}.${extension}`;
    const payload = {
      url: `${req.protocol}://${req.get('host')}/${moveTo}`,
      moveTo,
      repository,
      filename,
      extension,
      id,
      foodId, type,
    };
    let result = {};
    if (type === validations.const.IMAGE) {
      const [file, created] = await Model.findOrCreate({
        where: {foodId, type},
        defaults: payload
      });
      if (created) {
        const food = await Food.findByPk(foodId);
        food.image = file.url;
        await food.save();
        fileToUpload.mv(`./${upload.repositoryName}/${moveTo}`);
      }
      result = file;
    } else {
      fileToUpload.mv(`./${upload.repositoryName}/${moveTo}`);
      result = await Model.create(payload);
    }
    return res.status(201).json(result);
  } catch (error) {
    const message = 'Erreur lors de la creation du fichier';
    loggingError(NAMESPACE, message, error);
    return res.status(400).send({ message });
  }
};

/**
 * Permet de supprimer un fichier
 * @param {Request} req
 * @param {Response} res
 */

const deleteOne = async (req, res) => {
  const errors = await validations.deleteOne(req);
  if (errors.length) return res.status(400).json({ errors });
  try {
    const { id } = req.params;
    const model = await Model.findByPk(id);
    fs.unlink(`./${upload.repositoryName}/${model.moveTo}`, async (err) => {
      if (err) throw err;
      if (model.type === validations.const.IMAGE) {
        const food = await Food.findByPk(model.foodId);
        food.image = '';
        await food.save();
      }
      await model.destroy();
      return res.status(200).send('Elément supprimé');
    });
  } catch (error) {
    const message = 'Erreur lors de la suppression de l\'élément';
    loggingError(NAMESPACE, message, error);
    return res.status(400).send({ message });
  }
};

module.exports = {
  ping,
  create,
  deleteOne,
};
