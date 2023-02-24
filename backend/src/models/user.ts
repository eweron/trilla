import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role, {
        through: "UserRoles",
      })
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    defaultScope: {
      attributes: {
        exclude: ['password'],
      }
    },
    scopes: {
      withPassword: {
        attributes: {
          include: ['password']
        }
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};