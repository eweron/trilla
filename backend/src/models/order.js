'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Counterparty, {
        foreignKey: 'seller',
      })
      this.belongsTo(models.Counterparty, {
        foreignKey: 'customer',
      })
      this.belongsTo(models.Counterparty, {
        foreignKey: 'carrier',
      })

      this.hasMany(models.Invoice)
    }
  }
  Order.init({
    number: DataTypes.STRING,
    discription: DataTypes.TEXT,
    seller: DataTypes.INTEGER,
    customer: DataTypes.INTEGER,
    carrier: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};