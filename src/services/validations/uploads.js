const REPOSITORIES = ['images'];

const create = (req) => {
  const { repository } = req.query;
  const errors = [];
  if (!req.files || Object.keys(req.files).length === 0) {
    errors.push({
      msg: 'Aucun fichier',
      param: 'files',
      location: 'formData'
    });
  }
  if (!repository) {
    errors.push({
      msg: 'Ce champ est obligatoire',
      param: 'repository',
      location: 'query'
    });
  }
  if (!REPOSITORIES.includes(repository)) {
    errors.push({
      msg: `Ce champ doit être l'une des valeurs suivante: ${REPOSITORIES.join(',')}`,
      param: 'repository',
      location: 'query'
    });
  }
  return errors;
};

module.exports = {
  create,
};
