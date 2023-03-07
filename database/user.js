const { DataTypes } = require("sequelize");
const sequelize = require(".");

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email_address: {
        type: DataTypes.STRING,
        unique: true,
      },
      phone: DataTypes.STRING,
      api_key: DataTypes.STRING,
      password: DataTypes.STRING,
      is_admin: DataTypes.BOOLEAN,
    },
    {
        timestamps: true,
        paranoid: true
}
);

module.exports = User;