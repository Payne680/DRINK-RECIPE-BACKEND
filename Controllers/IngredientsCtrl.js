const Ingredient = require("../database/ingredient");

const getAllIngredients = async (req, res) => {
    const ingredients = await Ingredient.findAll();
    res.json(ingredients);
}

const updateAllIngredients = async function (req, res) {
    const { name, description } = req.body;
    const ingredient = await Ingredient.create({
        name,
        description,
    });
    res.send(ingredient);
}

const getOneIngredient =  async function (req, res) {
    const user = await Ingredient.findByPk(req.params.id)
    res.send(user);
}

const updateOneIngredient = async function (req, res) {
    const { name, description } = req.body;
    const ingredient = await Ingredient.update(
        {
            name,
            description,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );
    res.send(ingredient);
}

const addOneIngredient = async function (req, res) {
    const { name, description } = req.body;
    const ingredient = await Ingredient.update(
        {
            name,
            description,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    );
    res.send(ingredient);
}

const deleteOneIngredient = async function (req, res) {
    const ingredient = await Ingredient.destroy({ where: { id: req.params.id } });
    res.send("success");
}

module.exports = {
    getAllIngredients,
    updateAllIngredients,
    addOneIngredient,
    updateOneIngredient,
    deleteOneIngredient,
    getOneIngredient,
}