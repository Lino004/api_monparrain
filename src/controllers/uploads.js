const { v4: uuidv4 } = require('uuid');
const { error: loggingError } = require('../config/logging');
const { upload } = require('../config');
const validations = require('../services/validations/uploads');

const NAMESPACE = 'FOOD_CONTROLLER';

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
const create = (req, res) => {
  const errors = validations.create(req);
  if (errors.length) return res.status(400).json({ errors });
  try {
    const { repository } = req.query;
    const result = {};
    Object.keys(req.files).forEach(key => {
      const file = req.files[key];
      const [filename, extension] = file.name.match(/[^\\]*\.(\w+)$/);
      const id = uuidv4();
      const moveTo = `${repository}/${id}.${extension}`;
      file.mv(`./${upload.repositoryName}/${moveTo}`);
      result[key] = {
        url: `${req.protocol}://${req.get('host')}/${moveTo}`,
        moveTo,
        repository,
        filename,
        extension,
        id,
      };
    });
    return res.status(201).json(result);
  } catch (error) {
    const message = 'Erreur lors de la récupération des éléments';
    loggingError(NAMESPACE, message, error);
    return res.status(400).send({ message });
  }
};

module.exports = {
  ping,
  create,
};
