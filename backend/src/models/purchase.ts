import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Counterparty, {
        foreignKey: 'supplier',
      })
      this.belongsTo(models.Counterparty, {
        foreignKey: 'customer',
      })

      this.hasMany(models.Invoice)
    }
  }
  Purchase.init({
    number: DataTypes.STRING,
    discription: DataTypes.TEXT,
    status: DataTypes.STRING,
    supplier: DataTypes.INTEGER,
    customer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Purchase',
  });
  return Purchase;
};