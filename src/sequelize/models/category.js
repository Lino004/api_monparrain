'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      this.hasMany(models.Food, {
        foreignKey: 'categoryId',
      });
    }
  }
  Category.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};