import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Counterparty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, {
        foreignKey: 'seller'
      })
    }
  }
  Counterparty.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    taxId: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Counterparty',
  });
  return Counterparty;
};