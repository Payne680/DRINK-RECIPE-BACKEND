const Category = require("../database/category");

const getAllCategories = async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
  }

  const updateAllCategories = async function (req, res) {
    const { name, description } = req.body;
    const category = await Category.create({
        name,
        description,
    });
    res.send(category);
}

  const getOneCategories = async function (req, res) {
    const user = await Category.findByPk(req.params.id)
    res.send(user);
}

const updateOneCategory = async function (req, res) {
    const { name, description } = req.body;
    const category = await Category.update(
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
    res.send(category);
  }

  const addOneCategory = async function (req, res) {
    const { name, description } = req.body;
    const category = await Category.update(
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
    res.send(category);
  }

  const deleteOneCategory = async function (req, res) {
    const category = await Category.destroy({ where: { id: req.params.id } });
     res.send("success");
   }

   module.exports = {
    getAllCategories,
    updateAllCategories,
    updateOneCategory,
    addOneCategory,
    getOneCategories,
    deleteOneCategory,
   }