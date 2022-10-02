const config = require('../config');

module.exports = {
  development: {
    url: config.db.DEV_DB,
    dialect: 'postgres',
  },
  production: {
    url: config.db.PROD_DB,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
};