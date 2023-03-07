const Category = require("./category");
const Drink = require("./drink");
const Ingredient = require("./ingredient");
const User = require("./user");
const sequelize = require(".");
const Glass = require("./glass");

function relate() {
    sequelize.sync();

    User.hasMany(Drink);
    Drink.belongsTo(User);

    Drink.belongsToMany(Category, { through: "drinks_categories" });
    Ingredient.belongsToMany(Drink, { through: "drinks_categories" })

    Drink.belongsToMany(Ingredient, { through: "drinks_ingredients" });
    Ingredient.belongsToMany(Drink, { through: "drinks_ingredients" })

    Drink.belongsToMany(Glass, { through: "drinks_glasses" });
    Glass.belongsToMany(Drink, { through: "drinks_glasses" })

    sequelize.sync()

}

module.exports = relate;