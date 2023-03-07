const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('drink_recipe', 'root', undefined, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;