'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Food, {
        foreignKey: 'foodId',
        onDelete: 'CASCADE',
      });
      this.addScope('typeImageOnly', { where: { type: 'image' } });
    }
  }
  File.init({
    url: DataTypes.STRING,
    moveTo: DataTypes.STRING,
    repository: DataTypes.STRING,
    filename: DataTypes.STRING,
    extension: DataTypes.STRING,
    foodId: DataTypes.UUID,
    type: {
      type: DataTypes.ENUM,
      values: ['image', 'autre'],
    }
  }, {
    sequelize,
    modelName: 'File',
  });
  return File;
};