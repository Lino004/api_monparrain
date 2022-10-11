'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'categories',
        onDelete: 'CASCADE',
      });
      this.hasMany(models.File, {
        foreignKey: 'foodId',
        as: 'files',
      });
    }
  }
  Food.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};