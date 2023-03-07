const { DataTypes } = require("sequelize");
const sequelize = require(".")


const Glass = sequelize.define('glass', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
},
    {
        timestamp: true,
        paranoid: true
    }
);

module.exports = Glass;
