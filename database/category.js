const { DataTypes} = require("sequelize");
const sequelize =require(".")


const Category = sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
},
{
  timestamp: true,
  paranoid: true
}
);

module.exports = Category;
