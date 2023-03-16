const Drink = require("../database/drink");

const getAllDrinks = async (req, res) => {
    const drinks = await Drink.findAll();
    res.json(drinks);
  }

  const updateAllDrinks = async function (req, res) {
    const { name, description, imageUrl, recipe } = req.body;
    const drink = await Drink.create({
      name,
      description,
      imageUrl,
      recipe,
    });
    res.send(drink);
  }

  const getOneDrink = async function (req, res) {
    const user = await Drink.findByPk(req.params.id)
    res.send(user);
}

const updateOneDrink = async function (req, res) {
    const { name, description, imageUrl, recipe } = req.body;
    const drink = await Drink.update(
      {
        name,
        description,
        imageUrl,
        recipe,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(drink);
  }

  const addOneDrink = async function (req, res) {
    const { name, description, imageUrl, recipe } = req.body;
    const drink = await Drink.update(
      {
        name,
        description,
        imageUrl,
        recipe,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(drink);
  }

  const deleteOneDrink = async function (req, res) {
    const drink = await Drink.destroy({ where: { id: req.params.id } });
     res.send("success");
   }

  module.exports = {
    getAllDrinks,
    updateAllDrinks,
    getOneDrink,
    updateOneDrink,
    addOneDrink,
    deleteOneDrink,
  }